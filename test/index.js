const PolishDateFormat = require('./../polishDateFormat');
let dateParser = new PolishDateFormat();
//tests
let date1 = new Date(1970, 2, 1);
let date2 = new Date(2003, 11, 3);

console.log(date1.toDateString());
console.log(date2.toDateString());

console.assert(
    dateParser.parseDate(date1.toDateString()) === "niedziela marzec");
console.assert(
    dateParser.parseDate(date2.toDateString()) === 'środa grudzień');