const decipher = (str: string): string => {
  const num = parseInt(str);
  const result = String.fromCharCode(num) + str.slice(num.toString().length);
  if (result.length < 3) return result;
  return result.slice(0, 1) + result[result.length - 1] + result.slice(2, result.length - 1) + result[1];
};

export const decipherThis = (str: string): string => {
  return str.split(' ').map(decipher).join(' ');
};
