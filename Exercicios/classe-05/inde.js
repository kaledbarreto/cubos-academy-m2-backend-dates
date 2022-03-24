function taAberto(date) {
  if (date.getDay() >= 1 && date.getDay() <= 5) {
    if (date.getHours() >= 8 && date.getHours() <= 18) {
      console.log("True");
    } else {
      console.log("False");
    }
  } else if (date.getDay() === 6) {
    if (date.getHours() >= 8 && date.getHours() <= 12) {
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

taAberto(new Date(2021, 3, 24, 9, 30)); // deve retornar true, pois é sábado de manhã (9h30)