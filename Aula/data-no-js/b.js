const { add } = require('date-fns');

const date = new Date(2017, 3, 12);

console.log(date);

//Basicamente adiciona na data original
//OBS: Ele retorna uma data modificada, ele não muda necessariamente a data original.
console.log(add(date, {
  seconds: 2,
  days: 1,
  years: 10
}));

console.log(date);