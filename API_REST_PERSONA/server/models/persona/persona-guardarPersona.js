'use strict';
var Constantes = require('../../constantes/Constantes.json');
var funt = require('../../funciones/funciones.js');


let guardarPersona = function (personaJson, app) {
    console.log("persona - guardarpersona() - Data recibida personaJson{}", personaJson);

    return new Promise((resolve, reject) => {
        app.models.Persona.findOrCreate(

            {
                id: "",
                nombres: personaJson.nombres,
                apellidos: personaJson.apellidos,
                fecha: funt.dateTimeNow(),
            },
            function (err, personaJsonResponse) {
                if (err) {
                    console.log("Error al Insertar persona", err);
                    reject(err);
                } else {
                    console.log("persona - guardarpersona  OK: personaJsonResponse{}", personaJsonResponse);

                    if (personaJsonResponse && personaJsonResponse != null && personaJsonResponse != '') {

                        let response = {
                            'resultado': Constantes.MSG_OK,
                            'mensaje': Constantes.MSG_INFO_GUARDAR,
                            'objetoResponse': personaJsonResponse
                        };
                        resolve(response);

                    } else {
                        console.log('persona - guardarpersona OK: No se encuentran datos a ingresar.');
                        let response = {
                            'status': 404,
                            'mensajeError': Constantes.MSG_ERROR_NO_INSERT
                        };
                        resolve(response);
                    }
                }
            }
        );

    });
}

module.exports = {
    guardarPersona
};