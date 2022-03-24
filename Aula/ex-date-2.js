const finalDaCopa = new Date(2002, 5, 30, 8);
const primeiroGol = +finalDaCopa + (1000 * 60 * 60) + (1000 * 60 * 22);
const segundoGol = +finalDaCopa + (1000 * 60 * 60) + (1000 * 60 * 34);

const primeiroGolDate = new Date(primeiroGol);
const segundoGolDate = new Date(segundoGol);

console.log(primeiroGolDate, segundoGolDate);