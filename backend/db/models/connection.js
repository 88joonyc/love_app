'use strict';

const {validator} = require('sequelize')
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const Connection = sequelize.define('Connection', {
    loveyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "Users"
        },
      },
    },
    doveyId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: "Users"
        },
      },
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
    Connection.belongsTo(models.User, { foreignKey: "doveyId", as: 'dovey'})
    Connection.belongsTo(models.User, { foreignKey: "loveyId", as: 'lovey'})
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
