import {GET, Path, PathParam, QueryParam} from 'typescript-rest';
import {Inject} from 'typescript-ioc';
import {Number2RomanApi} from '../services';
import {LoggerApi} from '../logger';

@Path('/to-roman')
export class Number2RomanController {

  @Inject
  service: Number2RomanApi;
  @Inject
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child('Number2RomanController');
  }

  // @GET
  // async sayHelloToUnknownUser(): Promise<string> {
  //   this.logger.info('Saying hello to someone');
  //   return this.service.greeting();
  // }

  // @Path(':name')
  @GET
  async sayHello(@QueryParam('value') value: number): Promise<string> {
    this.logger.info(`Saying hello to ${value}`);
    return this.service.number2Roman(value);
  }
}
