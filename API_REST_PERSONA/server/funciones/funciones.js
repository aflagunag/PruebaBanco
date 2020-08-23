'use strict'

let dateTimeNow = function () {
    let fch = new Date()
    fch.setHours(fch.getHours() - 5);
    return fch.getTime();
};

module.exports = {
    dateTimeNow
}