/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    userName : {
      type : 'string',
      required : true,
      unique : true
    },
    password : {
      type : 'string',
      required : true,
      regex : /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      encrypt : true
    },
    user_person_FK : {
      model : 'Persona'
    },
    user_roles : {
      collection : 'UsuarioRol',
      via : 'usuario_FK'
    }

  },

};

