import test from 'tape-cup';
import {FetchToken, SessionToken, LoggerToken} from '../index.js';

test('tokens exist', t => {
  t.ok(FetchToken);
  t.ok(SessionToken);
  t.ok(LoggerToken);
  t.end();
});
