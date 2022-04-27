const num = ['ｾﾞﾛ', 'ｲﾁ', 'ﾆ', 'ｻﾝ', 'ﾖﾝ', 'ｺﾞ', 'ﾛｸ', 'ﾅﾅ', 'ﾊﾁ', 'ｷｭｰ'];
const four = ['', 'ｼﾞｭｰ', 'ﾋｬｸ', 'ｾﾝ'];
const prefix = [
  '',
  'ﾏﾝ',
  'ｵｸ',
  'ﾁｮｰ',
  'ｹｰ',
  'ｶﾞｲ',
  'ｼﾞｮ',
  'ｼﾞｮｰ',
  'ｺｰ',
  'ｶﾝ',
  'ｾｲ',
  'ｻｲ',
  'ｺﾞｸ',
  'ｺｳｶﾞｼｬ',
  'ｱｿｳｷﾞ',
  'ﾅﾕﾀ',
  'ﾌｶｼｷﾞ',
  'ﾑﾘｮｰﾀｲｽｳ',
];

export function isAho(str: string): boolean {
  const arr = str.split('');
  const has3 = arr.findIndex((s) => s === '3') !== -1;
  const mod3 = arr.map((s) => Number(s)).reduce((a, b) => a + b, 0) % 3 === 0;
  return has3 || mod3;
}

export function strToAho(str: string): string | null {
  const arr = str.split('').reverse();
  if (arr.length > 68) return null;

  const text: string[] = [];
  let digit = 0;
  while (arr.length > 0) {
    const a = arr.shift();
    const n = Number(a);

    if (digit % 4 === 0) text.push(prefix[digit / 4]);
    text.push(four[digit % 4]);
    if (!(n === 1 && digit % 4 !== 0)) text.push(num[n]);

    digit++;
  }
  return text.reverse().join('').trim();
}
