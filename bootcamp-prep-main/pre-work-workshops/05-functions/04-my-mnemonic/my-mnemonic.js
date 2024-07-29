// YOUR CODE BELOW
function myMnemonic(val1, val2, val3, val4) {
  let str = "";
  if (val1) {
    str += val1[0];
  }
  if (val2) {
    str += val2[0];
  }
  if (val3) {
    str += val3[0];
  }
  if (val4) {
    str += val4[0];
  }
  return str;
}

console.log(myMnemonic("Must", "Accept", "Sugar", "Happiness")); // => MASH
console.log(myMnemonic("We", "Eat", "Eggs")); // => WEE
