import { calculator } from './calculator';

describe('Calculator', () => {
  it('should be 0 fro empty string', () => {
    const result = calculator('');

    expect(result).toBe(0);
  });

  it("should be 0 if a string doesn't contain number and +", () => {
    const result = calculator('yo');

    expect(result).toBe(0);
  });

  it('should be 2', () => {
    const result = calculator('1 + 1');

    expect(result).toBe(2);
  });

  it('should be 0', () => {
    const result = calculator('1 - 1');

    expect(result).toBe(0);
  });

  it('should be 11', () => {
    const result = calculator('4 + 2 + 1 + 3');

    expect(result).toBe(10);
  });

  it('should be 3', () => {
    const result = calculator('4 - 2 + 1');
    expect(result).toBe(3);
  });
});
