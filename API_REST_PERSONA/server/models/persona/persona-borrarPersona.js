'use strict';
var Constantes = require('../../constantes/Constantes.json');
var funt = require('../../funciones/funciones.js');

let borrarPersona = function (personaJson, app, callback) {
    console.log("Persona - Data recibida borrarPersona personaJson{}", personaJson);
    return new Promise((resolve, reject) => {

        app.models.Persona.destroyAll(
            {
                id: personaJson.id
            },

            function (err, info) {
                if (err) {
                    console.log("Error al Borrar Persona", err);
                    reject(err);

                } else {

                    let response = {
                        'resultado': Constantes.MSG_OK,
                        'mensaje': Constantes.MSG_INFO_BORRAR,
                        'objetoResponse': info
                    };
                    resolve(response);

                }
            }
        );
    });
}

module.exports = {
    borrarPersona
};