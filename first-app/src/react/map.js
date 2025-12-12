const numbers = [1, 2, 3, 4, 5];
const multiply = numbers.map(twice);

console.log(multiply);

function twice(num) {
  return num * 2;
}
console.log(numbers);

numbers.forEach(num => {
  return console.log(num);
});
console.log(numbers);