'use strict';

const {validator} = require('sequelize')
const bcrypt = require('bcryptjs');

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

    // scopes: {
    //   currentConnection: {
    //     attributes: { exclude: ['validator'] }
    //   }
    // }

  });

  Connection.associate = function(models) {
    Connection.belongsTo(models.Connection, {foreignKey: "loveyId"})
    Connection.belongsTo(models.Connection, {foreignKey: "doveyId"})
  }

  Connection.getCurrentConnectionById = async function (id) {
    return await Connection.scope('currentConnection').findByPk(id)
  }

  Connection.connect = async function({ loveyId, validator }){
    const hashedValidator = bcrypt.hashSync(validator)
    const connection = await Connection.create({
      loveyId,
      validator
    })
    return await Connection.scope('currentConnection').findByPk(connection.id)
  }

  Connection.delete = async function({ connectionId }) {
    const connection = Connection.findByPk(connectionId)
    if (!connection) throw new Error('This connection does not exists!')

    await Connection.destroy({
      where: {id: connectionId}
    })

    return connection.id
  }

  return Connection;
};
