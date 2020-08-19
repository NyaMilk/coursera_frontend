function checkNumber(date) {
    if (date < 0)
        throw new TypeError('Передано отрицательное значение!');      
}

function ifYouNeedZero(number) {
    if (number < 10)
        return '0' + number;
    else
        return number;
}

// function getDate(date) {
//     var dateObject = {
//         year: (date.getFullYear()),
//         month: ifYouNeedZero(date.getMonth() + 1),
//         day: ifYouNeedZero(date.getDate()),
//         hours: ifYouNeedZero(date.getHours()),
//         minutes: ifYouNeedZero(date.getMinutes())
//     };
//     return dateObject.year + '-' + dateObject.month + '-' + dateObject.day + ' ' + dateObject.hours + ':' + dateObject.minutes;
// }

function getDate(date) {
    var year = date.getFullYear();
    var month = ifYouNeedZero(date.getMonth() + 1);
    var day = ifYouNeedZero(date.getDate());
    var hours = ifYouNeedZero(date.getHours());
    var minutes = ifYouNeedZero(date.getMinutes());
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
}

function changeDate(date, number, value) {
    if (value) {
        if (value === 'years')
            date.setFullYear(date.getFullYear() + number);
        else if (value === 'months')
            date.setMonth(date.getMonth() + number);
        else if (value === 'days')
            date.setDate(date.getDate() + number);
        else if (value === 'hours')
            date.setHours(date.getHours() + number);
        else if (value === 'minutes')
            date.setMinutes(date.getMinutes() + number);
        else
            throw TypeError('Неизвестная единица измерения');
    }
}

/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    date = new Date(date);
    var newDate = {
        get value() {
            return getDate(date);
        },
        add: function(number, value) {
            checkNumber(number);
            changeDate(date, number, value);
            return this;
        },
        subtract: function(number, value) {
            checkNumber(number);
            changeDate(date, number * -1, value);
            return this;
        }
    };
    return newDate;
}
