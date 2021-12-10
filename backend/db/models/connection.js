'use strict';

const {validator} = require('sequelize')
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const Connection = sequelize.define('Connection', {

    loveyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    doveyId: {
      type: DataTypes.INTEGER
    },

    validator: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    },

  });

  Connection.associate = function(models) {
    // define association here
  }

  Connection.connect = async function({  }){

  }


  return Connection;
};
