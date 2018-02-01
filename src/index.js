// @flow

// Helpers
export const TokenType = {
  Required: 0,
  Optional: 1,
};
function Ref() {}
class TokenImpl {
  name: string;
  ref: mixed;
  type: $Values<typeof TokenType>;

  constructor(name: string, ref: mixed) {
    this.name = name;
    this.ref = ref || new Ref();
    this.type = ref ? TokenType.Optional : TokenType.Required;
    if (!ref) {
      // $FlowFixMe
      this.optional = new TokenImpl(name, this.ref);
    }
  }
}

export type Token<T> = {
  (): T,
  optional: () => ?T,
};
export function createToken(name: string): Token<any> {
  // $FlowFixMe
  return new TokenImpl(name);
}

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
