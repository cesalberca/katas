const pipe =
  (...fns: any) =>
  (x: any) =>
    fns.reduce((v: any, f: any) => f(v), x)

const makeAStringUpperCase = (str: string): string => str.toUpperCase()
const replaceAllDoublePointByCommaWithSpace = (str: string): string => str.split(':').join(', ')
const splitPointCommaByDoubleParenthesis = (str: string): string[] => str.split(';')
const inverseFirstAndLastNameAnsWrapWithParenthesis = (strArr: string[]): string[] =>
  strArr.map(str => {
    const firstNameWithComma = str.match(/(.*)\,/gi)

    const firstName = firstNameWithComma ? firstNameWithComma[0].slice(0, -1) : ''

    const lastNameWithSpace = str.match(/\s(.*)/gi)

    const lastName = lastNameWithSpace ? lastNameWithSpace[0].slice(1) : ''

    return `(${lastName}, ${firstName})`
  })

const sortAlphabetically = (strArr: string[]): string[] => strArr.sort()

const transformArrInStr = (strArr: string[]): string => strArr.join('')

export function meeting(s: string): string {
  if (s.length < 1) return ''

  // your code
  return pipe(
    makeAStringUpperCase,
    replaceAllDoublePointByCommaWithSpace,
    splitPointCommaByDoubleParenthesis,
    inverseFirstAndLastNameAnsWrapWithParenthesis,
    sortAlphabetically,
    transformArrInStr
  )(s)
}
