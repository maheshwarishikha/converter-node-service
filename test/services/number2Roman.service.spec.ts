import {Container} from 'typescript-ioc';

import {Number2RomanService} from '../../src/services';
import {ApiServer} from '../../src/server';
import {buildApiServer} from '../helper';

describe('Number2Roman service', () =>{

  let app: ApiServer;
  let service: Number2RomanService;
  beforeAll(() => {
    app = buildApiServer();

    service = Container.get(Number2RomanService);
  });

  test('canary test verifies test infrastructure', () => {
    expect(service).not.toBeUndefined();
  });

  // describe('Given greeting()', () => {
    // context('when "Juan" provided', () => {
    //   const name = 'Juan';
    //   test('then return "Hello, Juan!"', async () => {
    //     expect(await service.greeting(name)).toEqual(`Hello, ${name}!`);
    //   });
    // });

//     context('when no name provided', () => {
//       test('then return "Hello, World!"', async () => {
//         expect(await service.number2Roman()).toEqual('Hello, World!');
//       });
//     })
//   });

//   it ("converter function should exist", () => {
//     expect( typeof(Converter.convertNumber2Roman)).toBe ("function");
// });

describe("Validate Input", () => {
    it ("input should not be 0", async () => {
        expect(await service.number2Roman(0)).toBe ("Invalid input");
    });
    
    it ("input should not be greater than 3999", async() => {
        expect(await service.number2Roman(4000)).toBe ("Invalid input");
    });
    
    // it ("input should not be string", async() => {
    //     expect(await service.number2Roman('testString')).toBe ("Invalid input");
    // });
    
    it ("input should not be float", async() => {
        expect(await service.number2Roman(1.1)).toBe ("Invalid input");
    });
    
    it ("input should not be negative integer", async() => {
        expect(await service.number2Roman(-2)).toBe ("Invalid input");
    });
    
    // it ("input should be positive integer", async() => {
    //     expect(await service.number2Roman(2)).toBe ("Valid input");
    // });
})

describe ("For input '1 to 3'", () => {
    it("should return 'I' on input 1", async() => {
        expect(await service.number2Roman(1)).toBe ("I");
    });
    it("should return 'II' on input 2", async() => {
        expect(await service.number2Roman(2)).toBe ("II");
    });
    it("should return 'III' on input 3", async() => {
        expect(await service.number2Roman(3)).toBe ("III");
    });
});

describe ("Tests for L, M, C, D, X, V and some more", () => {
    it("should return 'V' on input 5", async() => {
        expect(await service.number2Roman(5)).toBe ("V");
    });
    it("should return 'L' on input 50", async() => {
        expect(await service.number2Roman(50)).toBe ("L");
    });
});

describe ("Test for any other number", () => {
    it ("should return 'VIII' on input '8'", async() => {
        expect (await service.number2Roman(8)).toBe ("VIII");
    });
    it ("should return 'XVII' on input '17'", async() => {
        expect (await service.number2Roman(17)).toBe ("XVII");
    });
    it ("should return 'CCXXXVI' on input '236'", async() => {
        expect (await service.number2Roman(236)).toBe ("CCXXXVI");
    });
    it ("should return 'MMMCMXCIX' on input '3999'", async() => {
        expect (await service.number2Roman(3999)).toBe ("MMMCMXCIX");
    });
});

});
