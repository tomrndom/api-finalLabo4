'use strict';
var moment = require('moment');
var uuidv4 = require('uuid/v4');

module.exports = function (Auth) {

    // Nodejs encryption with CBR
    var crypto = require('crypto'),
        algorithm = 'aes-256-cbc',
        password = process.env.CRYPTO_PASSWORD; // Seter como variable de entorno

    function encrypt(text) {
        var cipher = crypto.createCipher(algorithm, password)
        var crypted = cipher.update(text, 'utf8', 'hex')
        crypted += cipher.final('hex');
        return crypted;
    }

    function decrypt(text) {
        var decipher = crypto.createDecipher(algorithm, password)
        var dec = decipher.update(text, 'hex', 'utf8')
        dec += decipher.final('utf8');
        return dec;
    }

    Auth.sendCode = function (cb) {
        let code = encrypt(uuidv4());
        console.log("codigo a enviar ", code);
        cb(null, code);
    }

    Auth.decryptCode = function (code, decrypted, phoneData, cb) {
        let check = decrypt(code);
        if (check === decrypted) {
            console.log("ok!");
            
        } else {
            console.log("wrong!");
        }
    }


    Auth.remoteMethod('sendCode', {
        returns: { root: true, type: 'object' },
        http: { path: '/sendCode', verb: 'get' }
    });

    Auth.remoteMethod('decryptCode', {
        accepts: [
            { arg: 'code', type: 'string' },
            { arg: 'decrypted', type: 'string' },
            { arg: 'phoneData', type: 'object' }
        ],
        returns: { root: true, type: 'object' },
        http: { path: '/decryptCode', verb: 'post' }
    });
}

