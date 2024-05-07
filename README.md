<h1 align="center">Katas</h1>

![GitHub](https://img.shields.io/github/license/cesalberca/katas)
![Star](https://img.shields.io/github/stars/cesalberca/katas.svg)
![Followers](https://img.shields.io/github/followers/cesalberca.svg?style=social&label=Follow&maxAge=2592000)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**

-   [Introduction](#introduction)
-   [Katas](#katas)
-   [Setup](#setup)
-   [Workflow](#workflow)
-   [Contributing](#contributing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

JavaScript/TypeScript Katas you can use to hone your skills as a developer! Try and follow [TDD](https://en.wikipedia.org/wiki/Test-driven_development) by doing the tests first and then implement the functionality to make that test pass.

## Katas

I recommend that you create a file with `<NAME>.<KATA>.ts` and `<NAME>.<KATA>.spec.ts` for the test, where `<NAME>` is the main characteristic of the Kata and `<KATA>` is the name of the Kata. Only if you find yourself stuck you might check the answer.

You can tackle the Katas in whatever order you may choose. The order specified here has more to do with difficulty of the Kata.

-   [Highest number](src/highest-number/README.md)
-   [Power of two](src/power-of-two/README.md)
-   [Add all numbers](src/add-all-numbers/README.md)
-   [Fizz buzz](src/fizz-buzz/README.md)
-   [forEach](src/for-each/README.md)
-   [Filter even numbers](src/filter-even-numbers/README.md)
-   [Flat](src/flat/README.md)
-   [Alphabetical](src/alphabetical/README.md)
-   [Fruit counter](src/fruit-counter/README.md)
-   [Grouper](src/grouper/README.md)
-   [Range](src/range/README.md)
-   [Calculator](src/calculator/README.md)
-   [Prime numbers](src/prime-numbers/README.md)
-   [Caesar's cypher](src/caesar/README.md)
-   [Change calculator](src/change-calculator/README.md)
-   [Christmas tree](src/christmas-tree/README.md)
-   [Word wrap](src/word-wrap/README.md)
-   [99 bottles](src/99-bottles/README.md)

## Setup

1. [Fork project on Github](https://github.com/cesalberca/katas.git)
2. Clone your project `git clone https://github.com/<YOUR_USER>/katas.git`
3. Create a branch from `main` where you'll work, `dev` for example.
4. Track remote upstream branch: `git remote add upstream https://github.com/cesalberca/katas.git`.
5. To update changes from upstream: `git pull upstream main`.
6. To propose changes you have to go to `main` branch, make a new branch from it, commit changes and then, on Github, make a Pull request from `<YOUR_BRANCH>` to `main`. If you want to bring a single commit from your dev branch you can use [cherry-pick](https://git-scm.com/docs/git-cherry-pick).
7. Install [NodeJS](https://nodejs.org/en/)
8. cd into it `cd katas`.
9. Install dependencies `npm i`.
10. Run tests once with `npm test` (or constantly with `npm run test:watch`).
11. Code your solutions inside the directories `my-solutions`.

## Workflow

Always start with the tests. Think about a ~~good~~ great test name and start with the `expect`. For instance, lets think about a functionality that gives us the highest number of an array.

We create the file `<NAME>.<KATA>.spec.ts` in `highest-number/solutions`. A first test could be:

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
import { getHighestNumber } from './src/highest-number'

describe('getHighestNumber', () => {
    it('should get the highest number given an array of one number', () => {
        const given = [42]

        const actual = getHighestNumber(given)

        expect(actual).toBe(42)
    })
})
```

Time to implement the function `getHighestNumber` inside a file we create in `highest-number/solutions` named `<NAME>.<KATA>.ts`:

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

If you have an interesting solution create a PR to this project with the name of the file like this: `<NAME>.<KATA>.ts`.
