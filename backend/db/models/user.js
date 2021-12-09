'use strict';

const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nickname: {
      type: DataTypes.STRING,
      validate: {
        len: [4, 50],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be email.')
          }
        },
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    image: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  }, {
    defaultScope: {
      attributes: {
        exclude: [ 'hashedPassword', 'email', 'createdAt', 'updatedAt' ],
      },
    },
    scopes: {
      currentUser: {
        attributes: {exclude:  ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  })
  User.associate = function(models) {
    // association are defined here
  };

  User.prototype.toSafeObject = function() {
    const { id, nickname, fullName, email, image, birthday } = this;
    return { id, nickname, fullName, email, image, birthday };
  };

  User.prototype.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      email,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id)
  }

  return User;
};
