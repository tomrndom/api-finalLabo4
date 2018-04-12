var schedule = require('node-schedule');
var moment = require('moment');
module.exports = function (app) {
    const MINUTES_MAX = 15;
    // var rule = new schedule.RecurrenceRule();
    // rule.second = 10;
    var j = schedule.scheduleJob(`*/${MINUTES_MAX} * * * *`, function () {
        cleanTokens();
    });
    cleanTokens();

    function cleanTokens() {
        let token = app.models.Devices;
        let timeMax = moment().subtract(MINUTES_MAX, 'minutes').toDate();
        token.find({
            where: {
                fechaCreacion: {
                    lt: timeMax
                }
            },
            fields: ['uuid']
        })
            .then(dispositivos => {
                dispositivos.map(dispositivo => {                    
                    token.destroyById(dispositivo.uuid);
                })
            })
    }
};
