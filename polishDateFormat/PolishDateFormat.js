'use strict';

/** this application, should get date and returns date (week day and month) in polish languate format.
 */

module.exports = class PolishDateFormat {
    constructor() {
        this.dateInPolishFormat = "";
        this.polishDays = ["poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"];
        this.englishDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        this.englishMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.polishMonths = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
        this.dayInPolishFormat = "";
        this.monthInPolishFormat = "";
    }

    getDateInPolishFormat() {
        return [this.dayInPolishFormat, this.monthInPolishFormat].join(" ")
    }

    parseDate(givenDate) {
        this.parseWeekDays(givenDate);
        this.parseMonths(givenDate);

        return this.getDateInPolishFormat();
    }

    parseMonths(givenDate) {
        let dateEntityString = givenDate.substring(givenDate.indexOf(" ") + 1);
        let englishDateFragment = dateEntityString.substring(0, dateEntityString.indexOf(" "));
        let englishDateIndex = this.englishMonths.indexOf(englishDateFragment);
        this.monthInPolishFormat = this.polishMonths[englishDateIndex];
    }

    parseWeekDays(givenDate) {
        let dateEntityString = givenDate.substring(0, givenDate.indexOf(" "));
        let englishDateIndex = this.englishDays.indexOf(dateEntityString);
        this.dayInPolishFormat = this.polishDays[englishDateIndex];
    }
};