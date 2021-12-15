'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Connections', [
      {
        loveyId: 1,
        doveyId: 2,
        validator: 12344253
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Connections', {

    })
  }
};
