import {ContainerConfiguration, Scope} from 'typescript-ioc';
import {Number2RomanApi} from './number2Roman.api';
import {Number2RomanService} from './number2Roman.service';

const config: ContainerConfiguration[] = [
  {
    bind: Number2RomanApi,
    to: Number2RomanService,
    scope: Scope.Singleton
  }
];

export default config;