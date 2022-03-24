// const date = new Date(2002, 5, 30, 8, 0, 0);

// console.log(+date); //O "+" serve para coletar o tempo (Tem outras formas tbm)

const finalDaCopa = new Date(2002, 5, 30, 8);
const finalMaisUmaHora = +finalDaCopa + 1000 * 60 * 60;
const maisUmaHoraDate = new Date(finalMaisUmaHora);

console.log(maisUmaHoraDate);