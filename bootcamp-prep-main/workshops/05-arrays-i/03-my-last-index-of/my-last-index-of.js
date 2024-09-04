// YOUR CODE BELOW
function myLastIndexOf(arr, searchValue, startIdx) {
  if (startIdx === undefined) {
    startIdx = arr.length - 1;
  }

  for (let i = startIdx; i >= 0; i--) {
    if (arr[i] === searchValue) {
      return i;
    }
  }

  return -1;
}

console.log(myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'));
