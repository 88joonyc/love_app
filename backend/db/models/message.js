'use strict';

module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    connectionId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: {
          tableName: 'Connections'
        },
      },
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'Users'
        },
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,

    },
  })
  return Message;
};
