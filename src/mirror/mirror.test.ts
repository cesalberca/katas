import { mirror } from './mirror';
describe('mirror', () => {
  it('should handle empty object', () => {
    expect(mirror({})).toEqual({});
  });
  it('should display the object with the ket as value when we canot reverse it', () => {
    expect(mirror({ a: undefined })).toEqual({ a: 'a' });
  });

  it('should handle obj with multiple keys', () => {
    expect(mirror({ a: undefined, b: undefined })).toEqual({ a: 'a', b: 'b' });
  });

  it('should reverse the key and put it as value whenever it is possible', () => {
    expect(mirror({ ab: undefined, cd: undefined })).toEqual({ ab: 'ba', cd: 'dc' });
  });
});
