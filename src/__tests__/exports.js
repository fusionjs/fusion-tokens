// @flow

import test from 'tape-cup';

import {
  BodyParserOptionsToken,
  FetchToken,
  SessionToken,
  LoggerToken,
} from '../index.js';

test('fusion-tokens exports', t => {
  t.ok(BodyParserOptionsToken, 'exports BodyParserOptionsToken');
  t.ok(FetchToken, 'exports FetchToken');
  t.ok(SessionToken, 'exports SessionToken');
  t.ok(LoggerToken, 'exports LoggerToken');
  t.end();
});
