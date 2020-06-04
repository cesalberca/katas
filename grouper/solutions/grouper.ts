export type Person = { name: string; age: number }

export function grouper(people: Person[]) {
  return people.reduce((acc: Record<number, Person[]>, x) => {
    const age = acc[x.age]
    if (age === undefined) {
      acc[x.age] = [x]
    } else {
      age.push(x)
    }

    return acc
  }, {})
}
