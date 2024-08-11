// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx = 0) {
  if (searchValue === undefined) {
    return -1;
  }

  for (let i = startIdx; i <= source.length - searchValue.length; i++) {
    if (source.slice(i, i + searchValue.length) === searchValue) {
      return i;
    }
  }

  return -1;
}
