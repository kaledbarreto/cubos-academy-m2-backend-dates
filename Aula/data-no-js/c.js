const { addBusinessDays } = require('date-fns');

const date = new Date(2017, 3, 12);

console.log(date);

console.log(addBusinessDays(date, 10));