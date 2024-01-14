export function sum(a: number, b: number): number {
  return a + b;
}

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    const result = sum(2, 3);
    expect(result).toEqual(5);
  });
});
