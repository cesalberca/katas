<h1 align="center">Katas</h1>

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/cesalberca/katas/CI)
![David](https://img.shields.io/david/dev/cesalberca/katas)
![GitHub](https://img.shields.io/github/license/cesalberca/katas)
![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
![Coverage](coverage-badge.svg)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**

- [Introduction](#introduction)
- [Katas](#katas)
- [Development](#development)
- [Workflow](#workflow)
- [Contributing](#contributing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

JavaScript/TypeScript Katas you can use to hone your skills as a developer! Try and follow [TDD](https://en.wikipedia.org/wiki/Test-driven_development) by doing the tests first and then implement the functionality to make that test pass.

## Katas

- [Highest number](highest-number/README.md)
- [Power of two](power-of-two/README.md)
- [Add all numbers](add-all-numbers/README.md)
- [Filter even numbers](filter-even-numbers/README.md)
- [Alphabetical](alphabetical/README.md)
- [Fizz buzz](fizz-buzz/README.md)
- [Calculator](calculator/README.md)
- [Prime numbers](prime-numbers/README.md)
- [Caesar's cypher](caeser/README.md)
- [Change calculator](change-calculator/README.md)
- [Word wrap](word-wrap/README.md)
- [99 bottles](99-bottles/README.md)
- [99 bottles OOP](99-bottles-oop/README.md)

## Development

1. Install [NodeJS](https://nodejs.org/en/)
2. Clone project `git clone https://github.com/cesalberca/katas.git`
3. cd into it `cd katas`
4. Install dependencies `npm i`
5. Run tests `npm test:watch`
6. Code!

## Workflow

Always start with the tests. Think about a ~~good~~ great name test and start with the `expect`. For instance, lets think about a functionality that gives us the highest number of an array.

A first test could be:

```typescript
describe('getHighestNumber', () => {
  it('should get the highest number given an array of one number', () => {
    expect(actual).toBe(42)
  })
})
```

Notice that there isn't even an `actual` symbol declared. Thinking about the `expect` first let us focus on the functionality, and the assertion that we want to make.

Now let's finish the test:

```typescript
import { getHighestNumber } from './highest-number'

describe('getHighestNumber', () => {
  it('should get the highest number given an array of one number', () => {
    const given = [42]

    const actual = getHighestNumber(given)

    expect(actual).toBe(42)
  })
})
```

Time to implement the function `getHighestNumber`:

```typescript
export function getHighestNumber(numbers: number[]): number {
  return numbers[0]
}
```

Perfect! The test passes! Now it's a perfect time to make a commit.

Now, you might think this is utterly incomplete, right? Well, _it depends_, if all the arrays we received were of one position this function will be perfect. What we should do now, is add another test that makes our assumptions incorrect. And that's what we are going to do:

```typescript
it('should get the highest number given an array of several numbers', () => {
  const given = [1, 3, 2]

  const actual = getHighestNumber(given)

  expect(actual).toBe(3)
})
```

Now we run all the tests and we get an error, proving that our function needs to change in order to make the new test pass.

Because we have the previous test, whenever we change the functionality we should run the tests in order to make sure we didn't break the previous functionality:

```typescript
export function getHighestNumber(numbers: number[]): number {
  let highestNumber = numbers[0]

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i]
    }
  }

  return highestNumber
}
```

Great! Time to commit again. However, we can always improve our code without changing it's functionality. That's what we call **refactoring**. Let's just do that:

```typescript
export function getHighestNumber(numbers: number[]): number {
  return numbers.slice().sort()[numbers.length - 1]
}
```

If we run the tests they should still be green!

_Note: We did a slice before sort because sort mutates the original array and we don't want that._

## Contributing

If you have an interesting solution create a PR to this project with the name of the file like this: `<YOUR_USERNAME>.<NAME_OF_KATA>.ts`.
