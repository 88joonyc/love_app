'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        name: 'Summer Loving Vibe',
        connectionId: 1,
      },{
        name: 'Trip to Rome',
        connectionId: 1
      },{
        name: 'New experiences',
        connectionId: 1
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', {})
  }
};
