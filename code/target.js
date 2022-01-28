// Given a sorted array, of integers and a target value
// return the first and last index of the target value
// if target can't be found return [-1, -1]
const arr = [2, 4, 5, 5, 5, 5, 5, 7, 9, 9];
const target = 5;
// output = [2,6]

const findFirstLastIndex = (arr, target) => {
  let firstIndex = -1;
  let lastIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      firstIndex = i;
      break;
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      lastIndex = i;
      break;
    }
  }
  return [firstIndex, lastIndex];
}

console.log(findFirstLastIndex(arr, target));
