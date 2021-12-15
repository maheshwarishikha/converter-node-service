import { Container } from "typescript-ioc";

export * from './number2Roman.api';
export * from './number2Roman.service';

import config from './ioc.config';

Container.configure(...config);