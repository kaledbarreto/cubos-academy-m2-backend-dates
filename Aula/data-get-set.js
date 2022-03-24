const hoje = new Date();
console.log(hoje.getMonth()); //Pega o mes -1 (Ou seja, para o JS outubro é 9).
console.log(hoje.getDay()); //O dia começa de 0 (domingo) e vai até 6 (Sábado).

hoje.setDate(5); //Setando o dia para 5.
hoje.setDate(hoje.getDate() - 30) //Diminuindo 30 dias a partir da data de hoje.