'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
    {
      nickname: 'LoveyD',
      firstName: 'Lovey',
      lastName: 'Dove',
      email: 'lovey@dove.com',
      image: 'https://f4.bcbits.com/img/a1074826773_10.jpg',
      phoneNumber: faker.phone.phoneNumberFormat(),
      birthday: faker.date.past(),
      gender: "male",
      hashedPassword: bcrypt.hashSync('password'),
    },
    {
      nickname: 'DoveyL',
      firstName: 'Dovey',
      lastName: 'Love',
      email: 'dovey@love.com',
      image: 'https://f4.bcbits.com/img/a1074826773_10.jpg',
      phoneNumber: faker.phone.phoneNumberFormat(),
      birthday: faker.date.past(),
      gender: "female",
      hashedPassword: bcrypt.hashSync('password'),
    },
    {
      nickname: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: 'lover1@email.com',
      image: faker.image.imageUrl(),
      phoneNumber: faker.phone.phoneNumberFormat(),
      birthday: faker.date.past(),
      gender: faker.name.gender(),
      hashedPassword: bcrypt.hashSync('password'),
    },
    {
      nickname: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: 'lover2@email.com',
      image: faker.image.imageUrl(),
      phoneNumber: faker.phone.phoneNumberFormat(),
      birthday: faker.date.past(),
      gender: faker.name.gender(),
      hashedPassword: bcrypt.hashSync('password'),
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      nickname: { [Op.in]: [ 'lovey@dove.com', 'dovey@love.com', 'lover1@email.com', 'lover2@email.com' ] }
    }, {});
  }
};
