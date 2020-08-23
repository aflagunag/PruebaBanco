'use strict'

// Metodos Guardar
var beforeGuardar = require('./persona-guardarPersona-before.js');
var guardarMetodo = require('./persona-guardarPersona.js');

// Metodos Listar
var beforeListar = require('./persona-listarPersona-before.js');
var listarMetodo = require('./persona-listarPersona.js');

// Metodos Consultar
var beforeConsultar = require('./persona-consultarPersona-before.js');
var consultarMetodo = require('./persona-consultarPersona.js');

// Metodos actualizar
var beforeActualizar = require('./persona-actualizarPersona-before.js');
var actualizarMetodo = require('./persona-actualizarPersona.js');

// Metodos borrar
var beforeBorrar = require('./persona-borrarPersona-before.js');
var borrarMetodo = require('./persona-borrarPersona.js');


module.exports = function (Persona) {
    Persona.beforeRemote('guardarPersona', function (ctx, unused, next) {
        beforeGuardar.beforeGuardarPersona(ctx)
            .then(result => next())
            .catch(err => ctx.res.json(err));
    });

    Persona.beforeRemote('listarPersona', function (ctx, unused, next) {
        beforeListar.beforeListarPersona(ctx)
            .then(result => next())
            .catch(err => ctx.res.json(err));
    });

    Persona.beforeRemote('consultarPersona', function (ctx, unused, next) {
        beforeConsultar.beforeConsultarPersona(ctx)
            .then(result => next())
            .catch(err => ctx.res.json(err));
    });

    Persona.beforeRemote('actualizarPersona', function (ctx, unused, next) {
        beforeActualizar.beforeActualizarPersona(ctx)
            .then(result => next())
            .catch(err => ctx.res.json(err));
    });

    Persona.beforeRemote('borrarPersona', function (ctx, unused, next) {
        beforeBorrar.beforeBorrarPersona(ctx)
            .then(result => next())
            .catch(err => ctx.res.json(err));
    });

    /* Guardar un registro de la Datos Persona */
    Persona.guardarPersona = function (personaJson, callback) {
        return new Promise((resolve, reject) => {
            guardarMetodo.guardarPersona(personaJson, Persona.app)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    if (typeof callback != "function") { reject(err); }
                    else { callback(err); }
                });
        });
    };

    /* listar un registro de la Datos Persona */
    Persona.listarPersona = function (personaJson, callback) {
        return new Promise((resolve, reject) => {
            listarMetodo.listarPersona(personaJson, Persona.app)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    if (typeof callback != "function") { reject(err); }
                    else { callback(err); }
                });
        });
    };

    /* consultar un registro de la Datos Persona */
    Persona.consultarPersona = function (personaJson, callback) {
        return new Promise((resolve, reject) => {
            consultarMetodo.consultarPersona(personaJson, Persona.app)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    if (typeof callback != "function") { reject(err); }
                    else { callback(err); }
                });
        });
    };

    /* Actualizar un registro de la Datos Persona */
    Persona.actualizarPersona = function (personaJson, callback) {
        return new Promise((resolve, reject) => {
            actualizarMetodo.actualizarPersona(personaJson, Persona.app)
                .then(res => {
                    if (typeof callback != "function") { resolve(res); }
                    else { callback(null, res); }
                })
                .catch(err => {
                    if (typeof callback != "function") { reject(err); }
                    else { callback(err); }
                });
        });
    };

    /* Borrar un registro de la Datos Persona */
    Persona.borrarPersona = function (personaJson, callback) {
        return new Promise((resolve, reject) => {
            borrarMetodo.borrarPersona(personaJson, Persona.app)
                .then(res => {
                    if (typeof callback != "function") { resolve(res); }
                    else { callback(null, res); }
                })
                .catch(err => {
                    if (typeof callback != "function") { reject(err); }
                    else { callback(err); }
                });
        });
    };

    Persona.remoteMethod('guardarPersona', {
        accepts: {
            arg: 'personaJson',
            type: 'object',
            'http': {
                source: 'body'
            }
        },
        returns: {
            arg: 'response',
            type: 'object',
            root: true,
        },
        description: "Guardar un registro en la Datos Persona",
        http: {
            path: '/guardarPersona',
            verb: 'post'
        }
    });

    Persona.remoteMethod('listarPersona', {
        accepts: {
            arg: 'personaJson',
            type: 'object',
            'http': {
                source: 'body'
            }
        },
        returns: {
            arg: 'response',
            type: 'object',
            root: true,
        },
        description: "Listar registros de la Datos Persona",
        http: {
            path: '/listarPersona',
            verb: 'post'
        }
    });

    Persona.remoteMethod('consultarPersona', {
        accepts: {
            arg: 'personaJson',
            type: 'object',
            'http': {
                source: 'body'
            }
        },
        returns: {
            arg: 'response',
            type: 'object',
            root: true,
        },
        description: "Consultar registros de la Datos Persona",
        http: {
            path: '/consultarPersona',
            verb: 'post'
        }
    });

    Persona.remoteMethod('actualizarPersona', {
        accepts: {
            arg: 'personaJson',
            type: 'object',
            'http': {
                source: 'body'
            }
        },
        returns: {
            arg: 'response',
            type: 'object',
            root: true,
        },
        description: "Actualizar registros de la Datos Persona",
        http: {
            path: '/actualizarPersona',
            verb: 'post'
        }
    });

    Persona.remoteMethod('borrarPersona', {
        accepts: {
            arg: 'personaJson',
            type: 'object',
            'http': {
                source: 'body'
            }
        },
        returns: {
            arg: 'response',
            type: 'object',
            root: true,
        },
        description: "Borrar registros de la Datos Persona",
        http: {
            path: '/borrarPersona',
            verb: 'post'
        }
    });
};