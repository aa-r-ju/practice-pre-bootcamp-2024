// YOUR CODE BELOW
function crazyCaps(str) {
  let val = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      val += str[i].toLowerCase();
    } else {
      val += str[i].toUpperCase();
    }
  }
  return val;
}
