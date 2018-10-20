const PolishDateFormat = require('./node_modules/polishDateFormat');
let dateParser = new PolishDateFormat();
//tests
let date1 = new Date(1970, 1, 1);
let date2 = new Date(2003, 3, 3);

console.assert(
    dateParser.parseDate(date1.toDateString()) === "niedziela");
console.assert(
    dateParser.parseDate(date2.toDateString()) === 'czwartek');