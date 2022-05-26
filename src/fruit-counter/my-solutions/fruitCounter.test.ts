import { fruitCounter } from './fruitCounter';

describe('fruit counter', () => {
  it('should return fruit of length 1', () => {
    const result = fruitCounter(['🍋']);

    expect(result).toEqual({ '🍋': 1 });
  });

  it('should return fruit length more than one', () => {
    const result = fruitCounter(['🍋', '🍋']);

    expect(result).toEqual({ '🍋': 2 });
  });

  it('should return 2 fruits with their length', () => {
    const result = fruitCounter(['🍋', '🍉', '🍉']);

    console.log(result);

    expect(result).toEqual({ '🍋': 1, '🍉': 2 });
  });

  it('should return 3 fruits with their length', () => {
    const result = fruitCounter(['🍒', '🍉', '🍋', '🍒']);

    expect(result).toEqual({ '🍋': 1, '🍉': 1, '🍒': 2 });
  });
});
