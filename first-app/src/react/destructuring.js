const vehicles = ['mustang', 'f-150', 'expedition'];

// ? old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
console.log(`${car} + ${truck} + ${suv}`);

// ? destructuring
const [Car, Truck, Suv] = vehicles;