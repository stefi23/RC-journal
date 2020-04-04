// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3285/

/*
Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

//Last version
function maxSubArray(arr) {
  if (arr.length === 1) return arr[0];
  let smallest = 0;

  let running_total = 0;
  let answer = arr[0];
  for (var i = 0; i < arr.length; i++) {
    let value = arr[i];
    running_total += value;

    // if(answer < running_total - smallest){
    // answer = running_total - smallest
    // console.log("a ", answer)
    // }
    answer = Math.max(answer, running_total - smallest);
    smallest = Math.min(smallest, running_total);

    console.log(
      // i, "value=",value,
      "runningtotal=",
      running_total,
      "smallest=",
      smallest,
      "biggest= runningtotal-smallest",
      running_total - smallest,
      "answer=",
      answer
    );
  }

  return answer;
}

// too slow:
//https://repl.it/repls/BouncyProfuseNet

function maxSubArray(arr) {
  let highestSum = arr[0];
  let results = [];
  for (var start = 0; start < arr.length; start++) {
    for (var end = 0; end < arr.length; end++) {
      if (end >= start) {
        let subArr = arr.slice(start, end + 1);
        let newSum = subArr.reduce((sum, next) => sum + next, 0);
        if (newSum > highestSum) highestSum = newSum;
      }
    }
  }

  return highestSum;
}

//Too slow as well:

function maxSubArray(arr) {
  let results = [];
  let sums = [];
  for (var start = 0; start < arr.length; start++) {
    for (var end = 0; end < arr.length; end++) {
      if (end >= start) {
        results.push(arr.slice(start, end + 1));
        console.log("start=", start, "end=", end, arr.slice(start, end + 1));
      }
    }
  }
  for (subarr in results) {
    sums.push(results[subarr].reduce((a, b) => a + b, 0));
  }
  sums.sort((a, b) => a - b);
  return sums[sums.length - 1];
}

//Good tutorial: https://medium.com/@IndiraWilliams/max-sub-array-sum-javascript-f1303f979344

/*

Notes:


Case 1
 v             V
[9, -2, 3, 4, 5, -6]

Case 2
        v      V
[1, -2, 3, 4, 5, -6]
        
        [3 + 4 + 5]
        start=2, end=4

sum up to ending marker
[1 + -2 + 3 + 4 + 5] - [1 + -2]
sum up to starting marker
[1 + -2]
         [3 + 4 + 5] = (sum to end marker) - (sum to start marker)
               v V 

sum = 0
for x of arr: sum = sum + x
arr = [
  1, -2, 3, 4, 5, -6]

  1 + -2
running_total = [
  1
    -1
        2
            6
               11
                   5]

               17

function maxSequence(arr) {

if(arr.length ===1) return arr[0]  
  let smallest = 0;

  let running_total = 0;
  let answer = arr[0];
  for(var i = 0; i < arr.length; i++) {
    let value = arr[i];
    running_total += value;

    // if(answer < running_total - smallest){
    // answer = running_total - smallest
    // console.log("a ", answer)
    // }
      answer = Math.max(answer, running_total - smallest)
      smallest = Math.min(smallest,running_total);
  


        console.log( 
    // i, "value=",value,
     "runningtotal=", running_total, 
     "smallest=", smallest, 
     "biggest= runningtotal-smallest", running_total - smallest,
     "answer=", answer);
  }

  return answer;
}

maxSequence([-2, 1]) // Expected 1 
// maxSequence([20, -1, 3, 4, 5, -6])
// maxSequence([1, -2, 3, 4, 5, -6])

*/
