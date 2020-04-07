/* Array Helpers
https://www.codewars.com/kata/525d50d2037b7acd6e000534/solutions/javascript

Great kata to practice Javascript methodes like reduce, map, filter.

This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!


*/

Array.prototype.square = function () {
  return this.map((number) => number * number);
};

Array.prototype.cube = function () {
  return this.map((number) => number * number * number);
};

Array.prototype.sum = function () {
  return this.reduce((sum, number) => sum + number, 0);
};

Array.prototype.average = function () {
  return this.sum() / this.length;
};

Array.prototype.even = function () {
  return this.filter((number) => number % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((number) => number % 2 !== 0);
};
