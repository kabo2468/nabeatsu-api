import { isAho, strToAho } from '@/aho';

describe('isAho', () => {
  test('Aho 123', () => {
    const str = '123';
    const aho = isAho(str);
    expect(aho).toBe(true);
  });
  test('Not Aho 124', () => {
    const str = '124';
    const aho = isAho(str);
    expect(aho).toBe(false);
  });
});

describe('strToAho', () => {
  test('123', () => {
    const str = '123';
    const aho = strToAho(str);
    expect(aho).toBe('ﾋｬｸﾆｼﾞｭｰｻﾝ');
  });
  test('456', () => {
    const str = '456';
    const aho = strToAho(str);
    expect(aho).toBe('ﾖﾝﾋｬｸｺﾞｼﾞｭｰﾛｸ');
  });
  test('789', () => {
    const str = '789';
    const aho = strToAho(str);
    expect(aho).toBe('ﾅﾅﾋｬｸﾊﾁｼﾞｭｰｷｭｰ');
  });
});
