'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    connectionId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      unique: true,
      references: {
        model: {
          tableName: 'Connections'
        }
      }
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,

    },
  })
  return Message;
};
