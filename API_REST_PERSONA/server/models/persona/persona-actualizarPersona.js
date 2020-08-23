'use strict';
var Constantes = require('../../constantes/Constantes.json');
var funt = require('../../funciones/funciones.js');

let actualizarPersona = function (personaJson, app, callback) {
    console.log("Persona - Data recibida actualizarPersona personaJson{}", personaJson);
    return new Promise((resolve, reject) => {

        app.models.Persona.upsertWithWhere(
            {
                id: personaJson.id
            },
            {
                nombres: personaJson.nombres,
                apellidos: personaJson.apellidos                
            },
            function (err, personaJsonResult) {
                if (err) {
                    console.log("Error al Actualizar Persona", err);
                    reject(err);

                } else {

                    let response = {
                        'resultado': Constantes.MSG_OK,
                        'mensaje': Constantes.MSG_INFO_ACTUALIZAR,
                        'objetoResponse': personaJsonResult
                    };
                    resolve(response);

                }
            }
        );
    });
}

module.exports = {
    actualizarPersona
};