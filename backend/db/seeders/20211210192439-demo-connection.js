'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Connections', [
      {
        loveyId: 1,
        doveyId: 2,
        validator: 'As!fS$5f'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Connections', {

    })
  }
};
