interface Person {
  age: number;
  name: string;
}

type PersonOutput = {
  [key: number]: string[];
};

export const grouper = (people: Person[]): PersonOutput | string => {
  if (people.length === 0) return 'there is no people';

  return people.reduce((acc: PersonOutput, curr: Person) => {
    const { age, name } = curr;

    if (acc[age]?.includes(name)) {
      return acc;
    }

    if (acc[age]) {
      acc[age] = [...acc[age], name];
      return acc;
    }

    acc[age] = [name];

    return acc;
  }, {});
};
