function taAberto(date) {
  if (date.getHours() >= 8 && date.getHours() <= 18) {
    console.log("True");
  } else {
    console.log("False");
  }
}

// taAberto(new Date(2015, 1, 1, 12)); // deve retornar true
taAberto(new Date(2015, 1, 1, 2)); // deve retornar false