// YOUR CODE BELOW
function myUnshift(array, val) {
  let newArray = [val];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}
