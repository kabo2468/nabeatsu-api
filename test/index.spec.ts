import { handleRequest } from '@/index';

test('Not found num query', async () => {
  const res = handleRequest(new Request('http://localhost'));
  expect(res.status).toBe(400);
});
describe('Found num query', () => {
  test('Not Aho', async () => {
    const res = handleRequest(new Request('http://localhost?num=1'));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      num: 1,
      str: '1',
      isAho: false,
    });
  });
  test('Is Aho', async () => {
    const res = handleRequest(new Request('http://localhost?num=3'));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      num: 3,
      str: '3',
      isAho: true,
      text: 'ｻﾝ',
    });
  });
});
