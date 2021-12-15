import {Application} from 'express';
import {default as request} from 'supertest';
import {Container, Scope} from 'typescript-ioc';

import {Number2RomanApi} from '../../src/services';
import {buildApiServer} from '../helper';

class MockNumber2RomanService implements Number2RomanApi {
  number2Roman = jest.fn().mockName('greeting');
}

describe('Number2Roman.controller', () => {

  let app: Application;
  let mockGreeting: jest.Mock;

  beforeEach(() => {
    const apiServer = buildApiServer();

    app = apiServer.getApp();

    Container.bind(Number2RomanApi).scope(Scope.Singleton).to(MockNumber2RomanService);

    const mockService: Number2RomanApi = Container.get(Number2RomanApi);
    mockGreeting = mockService.number2Roman as jest.Mock;
  });

  test('canary validates test infrastructure', () => {
    expect(true).toBe(true);
  });

  describe('Given /to-roman', () => {
    const expectedResponse = 'Hello there!';

    beforeEach(() => {
      mockGreeting.mockReturnValueOnce(Promise.resolve(expectedResponse));
    });

    test('should return "Hello, World!"', done => {
      request(app).get('/to-roman').expect(200).expect(expectedResponse, done);
    });
  });

  // describe('Given /hello/Johnny', () => {
  //   const name = 'Johnny';

  //   beforeEach(() => {
  //     mockGreeting.mockImplementation(name => name);
  //   });

  //   test('should return "Hello, Johnny!"', done => {
  //     request(app).get(`/hello/${name}`).expect(200).expect(name, done);
  //   });
  // });

});
