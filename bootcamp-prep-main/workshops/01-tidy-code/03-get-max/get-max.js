// YOUR CODE BELOW

function getMax(val1, val2, val3) {
  if (val1 > val2) {
    if (val1 > val3) {
      return val1;
    }
    return val3;
  } else if (val2 > val3) {
    return val2;
  } else {
    return val3;
  }
}
