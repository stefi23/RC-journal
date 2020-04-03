function solution(string) {
  let arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr.splice(i, 0, " ");
      i += 2;
    }
  }
  return arr.join("");
}

solution("camelCaseDude");

// First attempt
function solution(string) {
  console.log(string);
  let arr = [];
  arr = string.split("");
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i].toUpperCase()) {
      result += " " + arr[i];
    } else {
      result += arr[i];
    }
  }

  return result;
}
