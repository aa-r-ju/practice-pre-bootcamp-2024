// YOUR CODE BELOW
function exponentiate(base, power) {
  let val = 1;
  for (let i = 0; i < power; i++) {
    val *= base;
  }
  return val;
}
