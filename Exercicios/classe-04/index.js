function taAberto(date) {
  if (date.getHours() >= 8 && date.getHours() <= 18) {
    if (date.getDay() >= 1 && date.getDay() <= 5) {
      console.log("True");
    } else {
      console.log("False");
    }
  } else {
    console.log("False");
  }
}

taAberto(new Date(2021, 3, 25, 12)); // deve retornar false, pois é um domingo
taAberto(new Date(2021, 3, 26, 12)); // deve retornar true, pois é uma segunda
taAberto(new Date(2021, 3, 26, 7, 59)); // deve retornar false, pois é muito cedo (7h59)