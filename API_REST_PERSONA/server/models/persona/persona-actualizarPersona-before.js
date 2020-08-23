'use strict';
var Constantes = require('../../constantes/Constantes.json');


let beforeActualizarPersona = function (ctx) {

    return new Promise((resolve, reject) => {
        if (ctx.req.body == null) {
            var response = {
                'status': 422,
                'mensaje': Constantes.MSG_ERROR_NO_DATA
            };
            reject(response);
        }
        else {
            resolve(ctx)
        }
    })
}


module.exports = {
    beforeActualizarPersona
};