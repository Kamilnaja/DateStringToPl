const dateParser = require('./node_modules/polishDateFormats');

//tests
let date1 = new Date(1970, 1, 1);
let date2 = new Date(2003, 3, 3);

console.assert(
    dateParser.polishDateFormat(date1.toDateString()) === "niedziela");
 console.assert(
    dateParser.polishDateFormat(date2.toDateString()) === 'czwartek');