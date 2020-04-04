//Given a non-empty array of integers, every element appears twice except for one. Find that single one.
//https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3283/

var singleNumber = function(nums) {
  let dictionary = {};
  let result;
  for (let i = 0; i < nums.length; i++) {
    if (dictionary[nums[i]]) {
      dictionary[nums[i]] += 1;
    } else {
      dictionary[nums[i]] = 1;
    }
  }
  for (char in dictionary) {
    console.log("dictionary[char]: ", dictionary[char]);
    console.log("char: ", char);
    if (dictionary[char] == 1) result = char;
  }

  return result;
};
