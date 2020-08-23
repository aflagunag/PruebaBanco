'use strict';
var Constantes = require('../../constantes/Constantes.json');
var funt = require('../../funciones/funciones.js');


let consultarPersona = function (personaJson, app) {
    console.log("persona - consultarpersona() - Data recibida personaJson{}", personaJson);

    return new Promise((resolve, reject) => {
        app.models.Persona.findOne(
            {
                where: {
                    id: personaJson.id
                },
            },
            function (err, personaJsonResponse) {
                if (err) {
                    console.log("Error al Insertar persona", err);
                    reject(err);
                } else {
                    console.log("persona - consultarpersona  OK: personaJsonResponse{}", personaJsonResponse);

                    if (personaJsonResponse && personaJsonResponse != null && personaJsonResponse != '') {

                        let response = {
                            'resultado': Constantes.MSG_OK,
                            'objetoResponse': personaJsonResponse
                        };
                        resolve(response);

                    } else {
                        console.log('persona - consultarpersona OK: No se encuentran datos a ingresar.');
                        let response = {
                            'status': 404,
                            'mensajeError': Constantes.MSG_ERROR_NO_INFO_CONSULTA
                        };
                        resolve(response);
                    }
                }
            }
        );

    });
}

module.exports = {
    consultarPersona
};