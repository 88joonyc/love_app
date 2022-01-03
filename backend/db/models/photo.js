'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    tag: {
      type: DataTypes.STRING(150),
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "Albums"
        }
      },
    },
  })

  Photo.associate = function(models) {
    Photo.belongsTo(models.Album, { foreignKey: 'albumId' })
  };

  return Photo;
};
