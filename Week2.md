# Week 2

**Planned 🤸**

- Do 1/2 challenge from Project Euler on FreeCodeCamp and more small ones from other websites
- Create and deploy a blog with Gatsby.JS
- Improve design of Rock, Paper, Scissors game in React - Add colors when hovering over button like here ( [example](https://codepen.io/kevinlo51/pen/YxmWPx); - Maybe emojis in the buttons ; - What about having a “fake delay”, either a counter after you press the button (3, 2, 1) or a randomizer of the emoji, then you can practice Timers in React
- Complete the [The Working Developer's Guide To Algorithms](https://scrimba.com/g/galgorithmsguide) course on Scrimba
- Work on Happy Numbers
- Complete Leet Code Challenge Week 2
- Learn how Childern communicated with Parents in React
- Write a non-technical presentation about either Time Zones or Checklists
- Be social, reach out to others, participate in coffee chats ☕

**Meetings I want to attend 🗽**

- Cracking the Coding Interview Study Hall
- Feelings Check-In
- Algorithms Study Group
- CSS Club
- Maybe The Natural Number Game - Lean Theorem Prover Tutorial
- Maybe Networking
- Cofee chat with Joana to talk about Docker

**What I've done 👯🏿‍♀️**

- Completed Katas:

  - [Unique Numbers](https://www.codewars.com/kata/54e6533c92449cc251001667)
  - [Array Helpers](https://www.codewars.com/kata/525d50d2037b7acd6e000534/solutions/javascript)
  - [Build a pile of Cubes](https://www.codewars.com/kata/5592e3bd57b64d00f3000047/solutions/javascript)

- Leet Code Challenges:
  - [Group Anagrams](https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3288/)
- Improved design on [Rock, Scissors, Paper Game](https://stefi.codes/Schere-Stein-Papier/)

- Attended the Algorithms Workshop and learned about Hashing

- Setup my blog with Gatsby and Markdown

- Wrote a draft of the Time Zones presentation

- Worked on Happy Numbers

**Challenges 🐘**

- Not letting the impostar syndrom take over. I've felt at the beginning of this week as if I don't know anything and will never get it.
- Setting up Python and virtual environments
- Some more challenging coding challenges take made me question my abilities
- Figuring out how Gatsby works and pagination

**What I've learned 💡**

- `Spread operator [...variable]` vs `split()`

  > Today I've learned that the **spread operator in JS** `[...variable]` allows an iterable such as an **array** but also **a string** to copied into an array.
  >
  > Thing you cannot do with the `split()` method as this method is used to split a **string** only into an **array** of substrings, and returns the new **array**I hope I got it right.I've found this useful while doing a kata where the argument received was either a string or an array and I needed it to be an array.
  >
  > Also there is the `Array.isArray(variable) - return true or false` to check if a variable is an array.

- Object.values()

> Object.values() returns an array whose elements are the enumerable property values found on the object. The ordering of the properties is the same as that given by looping over the property values of the object manually.
>
> The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)

[`Object.values(object) - link`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```javascript
const object = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object));

// expected output: Array ["somestring", 42, false]
```

[`for..in statements - link`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

```javascript
//for..in statement

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

> The more you [code], the easier it is to code.
> The easier it is to [code], the more you code  
> [Source](https://twitter.com/balajis/status/1202809697818030080)

> The more you repeat an activity the more the structure of your brain changes to become efficient at that activity. - Atomic Habits

Gatsby is a really cool tool for creating static websites.
