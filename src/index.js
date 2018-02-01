// @flow

import {createToken} from 'fusion-core';
import type {Token} from 'fusion-core';

// Tokens
type Fetch = (
  input: string | Request,
  init?: RequestOptions
) => Promise<Response>;
export const FetchToken: Token<Fetch> = createToken('FetchToken');

type Session = {
  from(
    ctx: Object
  ): {
    get(keyPath: string): any,
    set(keyPath: string, val: any): void,
  },
};
export const SessionToken: Token<Session> = createToken('SessionToken');

type Logger = {
  log(level: string, arg: any): void,
  error(arg: any): void,
  warn(arg: any): void,
  info(arg: any): void,
  verbose(arg: any): void,
  debug(arg: any): void,
  silly(arg: any): void,
};
export const LoggerToken: Token<Logger> = createToken('LoggerToken');
