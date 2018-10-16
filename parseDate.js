'use strict';
/** this application, should get date and returns date in polish languate format.
*/
function parseDate(givenDate) {

    let polishDays = ["poniedzialek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"];

    let polishMonths = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];

    return getPolishDay(givenDate, polishDays);

}

module.exports = parseDate

function getPolishDay(givenDate, polishDays) {
    let englishDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let englishDay = givenDate.substring(0, givenDate.indexOf(" "));

    let englishDayIndex = englishDays.indexOf(englishDay);
    return polishDays[englishDayIndex];
}
