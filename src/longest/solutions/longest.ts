export class G964 {
  public static longest(s1: string, s2 = '') {
    return [...new Set(`${s1}${s2}`.split('').sort())].join('')
  }
}
