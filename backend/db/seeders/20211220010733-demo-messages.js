'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Messages', [
      {
        connectionId: 1,
        senderId: 1,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 2,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 1,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 2,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 1,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 2,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 1,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 2,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 1,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 2,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 1,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 2,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 1,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 2,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 1,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 2,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 1,
        content: faker.random.words()
      },
      {
        connectionId: 1,
        senderId: 2,
        content: faker.random.words()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Messages', {})
  }
};
