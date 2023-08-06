export const mirror = (obj: Record<string, any>): Record<string, string> =>
  Object.keys(obj).reduce((a, o) => ({ ...a, [o]: o.split('').reverse().join('') }), {});
