function productFib(prod) {
  fibArr = [0, 1];
  while (fibArr[fibArr.length - 2] * fibArr[fibArr.length - 1] < prod) {
    fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
  }
  if (fibArr[fibArr.length - 2] * fibArr[fibArr.length - 1] == prod) {
    return [fibArr[fibArr.length - 2], fibArr[fibArr.length - 1], true];
  }
  return [fibArr[fibArr.length - 2], fibArr[fibArr.length - 1], false];
}
