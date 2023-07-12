import numberFormat from './numberFormat';

describe('numberFormat ', () => {
  it('number should be change to number with comma', () => {
    expect(numberFormat(1000)).toBe('1,000');

    expect(numberFormat(30000)).toBe('30,000');

    expect(numberFormat(2142523)).toBe('2,142,523');
  });
});
