// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
  if (currentNum > targetNum) {
    return 'targetNum must be larger than currentNum';
  }

  let minutes = 0;
  let bacteriaCount = currentNum;

  for (; bacteriaCount < targetNum; minutes += 20) {
    bacteriaCount *= 2;
  }
  return minutes;
}
