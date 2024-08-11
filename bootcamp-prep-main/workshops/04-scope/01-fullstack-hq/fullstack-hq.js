// Edit the code below
let place = 'Planet Earth';

function fullstackHQ() {
  return middleFunction('United States');

  function middleFunction(country) {
    return innerFunction('New York State');

    function innerFunction(state) {
      city = 'New York City';
      return innermostFunction(city);

      function innermostFunction() {
        return (
          'Fullstack HQ is at ' +
          place +
          ', ' +
          country +
          ', ' +
          state +
          ', ' +
          city
        );
      }
    }
  }
}

console.log('jnjhbdh');
console.log(fullstackHQ());
