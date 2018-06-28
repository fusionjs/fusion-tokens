// @flow

import {createToken} from 'fusion-core';
import type {Context, Token} from 'fusion-core';

// Tokens
export type Fetch = (
  input: string | Request,
  init?: RequestOptions
) => Promise<Response>;
export const FetchToken: Token<Fetch> = createToken('FetchToken');

export type Session = {
  from(
    ctx: Context
  ): {
    get(keyPath: string): any,
    set(keyPath: string, val: any): void,
  },
};
export const SessionToken: Token<Session> = createToken('SessionToken');

export type Logger = {
  log(level: string, arg: any): void,
  error(arg: any, error: any): void,
  warn(arg: any, arg: any): void,
  info(arg: any, arg: any): void,
  verbose(arg: any, arg: any): void,
  debug(arg: any, arg: any): void,
  silly(arg: any, arg: any): void,
  +access?: (arg: any, arg: any) => void,
  +fatal?: (arg: any, arg: any) => void,
  +trace?: (arg: any, arg: any) => void,
};
export const LoggerToken: Token<Logger> = createToken('LoggerToken');
