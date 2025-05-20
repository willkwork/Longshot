import test from 'node:test';
import assert from 'node:assert';
import { readFile } from 'node:fs/promises';

const pagePath = 'app/page.tsx';

test('home page exports a component', async () => {
  const code = await readFile(pagePath, 'utf8');
  assert.match(code, /export default function Home/);
});
