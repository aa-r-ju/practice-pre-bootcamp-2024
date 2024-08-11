// YOUR CODE BELOW
function onlyOne(arg1, arg2, arg3) {
  let truthyCount = 0;
  if (arg1) truthyCount++;
  if (arg2) truthyCount++;
  if (arg3) truthyCount++;
  return truthyCount === 1;
}
