'use strict';
var Constantes = require('../../constantes/Constantes.json');
var funt = require('../../funciones/funciones.js');

let listarPersona = function (personaJson, app, callback) {
    console.log('Persona - listarPersona data recibida personaJson{}', personaJson);
    let Persona = app.models.Persona

    return new Promise((resolve, reject) => {

        Persona.find(
            {
                order: 'id DESC',
                
            },
            function (err, PersonaResponseList) {
                if (err) {
                    console.log("Persona - listarPersona ERROR: ", err);
                    reject(err);
                }
                else {
                    if (PersonaResponseList !== undefined && PersonaResponseList.length > 0) {

                        let response = {
                            'resultado': Constantes.MSG_OK,
                            'mensaje': Constantes.MSG_INFO_LISTAR,
                            'resultadosList': {
                                'resultado': PersonaResponseList
                            }
                        };
                        resolve(response);

                    } else {
                        console.log('Persona - listarPersona OK: No se encuentran datos de la consulta.');
                        let response = {
                            'status': 404,
                            'mensajeError': Constantes.MSG_ERROR_NO_INFO_LISTADO
                        };
                        resolve(response);
                    }
                }
            }
        );
    });
};

module.exports = {
    listarPersona
};