// YOUR CODE BELOW
function zeroDarkThirty(num) {
  if (num === 0) {
    return NaN;
  }

  let val = '';
  let numStr = num.toString();

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] !== '0') {
      val += numStr[i];
    }
  }
  let result = val === '' ? NaN : parseFloat(val);
  return result;
}
