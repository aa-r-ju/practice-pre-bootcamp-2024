let counter = 0;

// YOUR CODE BELOW
function incrementalChange(num) {
  if (num) {
    return (counter += num);
  }
}

incrementalChange(2);
incrementalChange(2);
console.log(incrementalChange(-1));
