const { format } = require('date-fns');

function formatar(date) {
  console.log(format(date, "dd 'de' MMMM 'de' yyyy"));
  console.log(format(date, "dd/MM/yyyy"));
  console.log(format(date, "d MMM"));
  console.log(format(date, "dd 'de' MMM 'de' yyyy"));
  console.log(format(date, "dd/MMM"));
}

formatar(new Date(2020, 09, 05));