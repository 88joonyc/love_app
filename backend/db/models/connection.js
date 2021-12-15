'use strict';

const {Validator} = require('sequelize')
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const Connection = sequelize.define('Connection', {
    loveyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: {
          tableName: "Users"
        },
      },
    },
    doveyId: {
      type: DataTypes.INTEGER,
      unique: true,
      references: {
        model: {
          tableName: "Users"
        },
      },
    },
    validator: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  }, {
    defaultScope: {
      attributes: {
        exclude: [ 'validator' ],
      },
    },
    scopes: {
      loggedConnection: {
        attributes: {},
      },
      connect: {
        attributes: {}
      }
    },

  });

  Connection.associate = function(models) {
    Connection.belongsTo(models.User, { foreignKey: "loveyId", as: 'lovey'})
    Connection.belongsTo(models.User, { foreignKey: "doveyId", as: 'dovey'})
  }

  Connection.getCurrentConnectionById = async function ({id}) {
    const { Op } = require('sequelize');
    const connection = await Connection.scope('connect').findOne({
      where: {
        [Op.or]: [
          {
            loveyId: id
          },
          {
            doveyId: id
          }
        ],
      }
    })
    if (connection) {
      return await Connection.scope('loggedConnection').findByPk(connection.id)
    }
  }

  Connection.connect = async function({ loveyId, validator }){
    // const hashedValidator = bcrypt.hashSync(validator)
    const connection = await Connection.create({
      loveyId,
      validator
    })
    return await Connection.scope('loggedConnection').findByPk(connection.id)
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
