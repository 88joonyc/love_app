'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
    {
      nickname: 'Lovey',
      fullName: 'Lovey Dove',
      email: 'lovey@dove.com',
      image: 'https://f4.bcbits.com/img/a1074826773_10.jpg',
      birthday: faker.date.past(),
      hashedPassword: bcrypt.hashSync('password'),
    },
    {
      nickname: 'Dovey',
      fullName: 'Dovey Love',
      email: 'dovey@love.com',
      image: 'https://f4.bcbits.com/img/a1074826773_10.jpg',
      birthday: faker.date.past(),
      hashedPassword: bcrypt.hashSync('password'),
    },
    {
      nickname: faker.internet.userName(),
      fullName: faker.name.findName(),
      email: 'lover1@email.com',
      image: faker.image.imageUrl(),
      birthday: faker.date.past(),
      hashedPassword: bcrypt.hashSync(faker.internet.password()),
    },
    {
      nickname: faker.internet.userName(),
      fullName: faker.name.findName(),
      email: 'lover2@email.com',
      image: faker.image.imageUrl(),
      birthday: faker.date.past(),
      hashedPassword: bcrypt.hashSync(faker.internet.password()),
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
