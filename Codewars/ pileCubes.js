/*Challenge
https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript
Your challenge is to construct a building which will be made of a pile of n cubes. The cube at the bottom will have a volume of n3, the cube above will have volume of (n-1)3 and so on until the top with a volume of 13.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function f will be an integer m and you have to return the integer n (such as n3 + (n-1)3 + ... + 13 = m) or 0 if there is no such n.

Examples
f(1071225) --> 45
f(91716553919377) --> 0

*/
function findNb(m) {
  let n = 0;
  let sum = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}
