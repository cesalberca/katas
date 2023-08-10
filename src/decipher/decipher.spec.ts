import { decipherThis } from './decipher';

describe('decipher', () => {
  it('should decipher the sentence', () => {
    expect(decipherThis('72')).toBe('H');
    expect(decipherThis('72e')).toBe('He');
    expect(decipherThis('72olle')).toBe('Hello');
    expect(decipherThis('72olle 103doo 100ya')).toBe('Hello good day');
  });
});
