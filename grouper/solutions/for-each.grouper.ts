type PartyByAge = Record<number, string[]>

interface Person {
  age: number
  name: string
}

export function grouper(people: Person[]): PartyByAge {
  const partyByAge: PartyByAge = {}
  people.forEach(person => {
    if (partyByAge[person.age] === undefined) {
      partyByAge[person.age] = []
    }
    partyByAge[person.age].push(person.name)

    /*if (partyByAge[person.age] === undefined) {
      partyByAge[person.age] = []
      partyByAge[person.age].push(person.name)
    } else {
      partyByAge[person.age].push(person.name)
    }*/
  })
  return partyByAge
}
