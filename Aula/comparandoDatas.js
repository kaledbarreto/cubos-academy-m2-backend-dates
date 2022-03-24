const ontem = new Date("2020-10-04T19:05:39.522Z");
const ontem2 = new Date("2020-10-04T19:05:39.522Z");

console.log(ontem === ontem2); //Vai dar false

//Se quiser comparar o conteudo tem que comparar os timestamp

console.log(+ontem === +ontem2);

//Tem como fazer outros tipos de comparações tbm
console.log(+ontem < +ontem2);