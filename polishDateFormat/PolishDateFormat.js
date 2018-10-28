'use strict';

/** this application, should get date and returns date in polish languate format.
 * @param givenDate - date to parse
 */

module.exports = class PolishDateFormat {
    constructor() {
        this.dateInPolishFormat = "";
        this.polishDays = ["poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"];
        this.englishDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        this.englishMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.polishMonths = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
    }

    getDateInPolishFormat() {
        return this.dateInPolishFormat;
    }

    setDateInPolishFormat(date) {
        this.dateInPolishFormat = date;
    }

    parseDate(givenDate) {
        let englishDay = givenDate.substring(0, givenDate.indexOf(" "));
        let englishDayIndex = this.englishDays.indexOf(englishDay);
        this.dateInPolishFormat = this.polishDays[englishDayIndex];

        let newDateString = givenDate.substring(givenDate.indexOf(" ") + 1);
        let monthString = newDateString.substring(0, newDateString.indexOf(" "));
        let englishMonthIndex = this.englishMonths.indexOf(monthString);
        this.monthInPolishFormat = this.polishMonths[englishMonthIndex];
        return this.getDateInPolishFormat();
    }
};