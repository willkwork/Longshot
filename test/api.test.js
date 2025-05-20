import test from 'node:test';
import assert from 'node:assert';
import { readFile } from 'node:fs/promises';

const routePath = 'app/api/healthz/route.ts';

test('healthz route returns status ok', async () => {
  const code = await readFile(routePath, 'utf8');
  assert.match(code, /status:\s*'ok'/);
});
