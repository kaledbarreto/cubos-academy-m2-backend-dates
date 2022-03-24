const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')

// // Set the date to "2018-09-01T16:01:36.386Z"
// const utcDate = zonedTimeToUtc('2018-09-01 18:01:36.386', 'Europe/Berlin'); //Eu quero transformar essa data para UTC (OBS: Tem que passar a a zona atual tbm);

// Obtain a Date instance that will render the equivalent Berlin time for the UTC date
const date = new Date('2018-09-01T16:01:36.386Z')
const timeZone = 'Europe/Berlin' //Queremos converter para essa timeZone
const zonedDate = utcToZonedTime(date, timeZone)
// zonedDate could be used to initialize a date picker or display the formatted local date/time

console.log(zonedDate); //Não esta correto, por que o node por padrão so mostra em UTC, e por isso é necessário mais um passo.

// Set the output to "1.9.2018 18:01:36.386 GMT+02:00 (CEST)"
const pattern = 'd/M/yyyy HH:mm:ss.SSS \'GMT\' XXX (z)' //Seet a padrão para isso aqui.
const output = format(zonedDate, pattern, { timeZone: 'Europe/Berlin' })

console.log(output);