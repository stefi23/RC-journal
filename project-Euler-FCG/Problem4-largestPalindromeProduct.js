function largestPalindromeProduct(n) {
  let result = [];
  let numberHighest = Math.pow(10, n) - 1;
  let numberLowest = Math.pow(10, n - 1);

  for (let i = numberHighest; i >= numberLowest; i--) {
    for (let j = i; j <= numberHighest; j++) {
      if (checkPalindrome(j * i)) {
        result.push(j * i);
      }
    }
  }
  console.log(result.length);
  return result.sort((a, b) => a - b)[result.length - 1];
}
largestPalindromeProduct(3);
function checkPalindrome(number) {
  number = number.toString();
  let reverseNumber = number
    .split("")
    .reverse()
    .join("");
  if (number === reverseNumber) {
    return true;
  }
  return false;
}
