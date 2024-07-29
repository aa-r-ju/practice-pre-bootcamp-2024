// YOUR CODE BELOW
function defaultGreet(firstname, lastname = "Doe") {
  let greet = "Hi " + firstname + " " + lastname + "!";
  return greet;
}

defaultGreet("Chaka", "Khan"); // => 'Hi Chaka Khan!'
defaultGreet("John"); // => 'Hi John Doe!'
