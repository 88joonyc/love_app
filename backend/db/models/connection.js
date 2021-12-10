'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Connection = sequelize.define('Connection', {

    loveyId: {
      type: DataTypes.INTEGER
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

  Connection.init({
    loveyId: DataTypes.STRING,
    doveyId: DataTypes.STRING,
    validator: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Connection',
  });
  return Connection;
};
