function sumFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumWhile(arr) {
  let counter = 0;
  let sum = 0;
  while (counter < arr.length) {
    sum += arr[counter];
    counter++;
  }
  return sum;
}

function sumRecursion(arr) {
  if (arr.length > 1) return arr[arr.length - 1] + sumRecursion(arr.slice(0, arr.length - 1));
  return arr[0];
}

function sumTheSimpleWay(arr) {
}
const testArray = [0, 1, 2, 3, 4, 5, 6];
console.log(sumFor(testArray));
console.log(sumWhile(testArray));
console.log(sumRecursion(testArray));
console.log(sumTheSimpleWay(testArray));
