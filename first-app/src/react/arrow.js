// code before
let hello = function() {
  return 'Hello World';
}

// code after arrow function
hello = () => {
  return 'Hello World';
}

// code if the function only has one statement
hello = () => 'Hello World';

// code if it has a parameter
hello = (val) => 'Hello ' + val;

// code if it only has 1 parameter
hello = val => 'Hello ' + val;
console.log(hello);

