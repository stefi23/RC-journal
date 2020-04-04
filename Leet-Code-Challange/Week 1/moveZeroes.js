/*
https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3286/

Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

var moveZeroes = function(nums) {
  let count = 0;
  while (nums.indexOf(0) > -1) {
    let index = nums.indexOf(0);
    nums.splice(index, 1);
    count++;
  }
  while (count > 0) {
    nums.push(0);
    count--;
  }

  console.log(nums);
};
