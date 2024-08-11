// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx) {
  if (startIdx === undefined) {
    startIdx = 0;
  }
  if (endIdx === undefined) {
    endIdx = originalString.length;
  }

  let val = '';

  for (let i = startIdx; i < endIdx; i++) {
    val += originalString[i];
  }

  return val;
}
