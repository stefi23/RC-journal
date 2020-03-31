//Version 1 - would work but is too slow

function largestPrimeFactor(number) {
  // Good luck!
  let primeNumbers = [];
  let numbers = [];
  for (let i = 0; i <= number; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  for (let j = 0; j < primeNumbers.length; j++) {
    if (number % primeNumbers[j] === 0) {
      numbers.push(primeNumbers[j]);
    }
  }
  console.log(primeNumbers);
  console.log(numbers);
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result = result * numbers[i];
    if (result == number) {
      result = numbers[i];
      break;
    }
  }
  return result;
}
function isPrime(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}
largestPrimeFactor(5);

//Version 2 - faster but still not good enough

function largestPrimeFactor(number) {
  // Good luck!

  let numbers = [];
  let result = 1;
  for (let i = 0; i <= number; i++) {
    if (isPrime(i)) {
      if (number % i === 0) {
        numbers.push(i);
      }
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    result = result * numbers[i];
    if (result == number) {
      result = numbers[i];
      break;
    }
  }
  console.log(result);
  return result;
}
function isPrime(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}
largestPrimeFactor(13195);

//Version 3
