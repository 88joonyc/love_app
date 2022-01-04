'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        tag: 'Grease',
        image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12E37/production/_106376377_gettyimages-2092935.jpg',
        albumId: 1
      },
      {
        tag: 'Summer Luvin',
        image: 'https://www.lovethispic.com/uploaded_images/267133-Summer-Lovin.jpg',
        albumId: 1
      },
      {
        tag: 'The Colosseum',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/08/3a/fa/b1.jpg',
        albumId: 2
      },
      {
        tag: 'Fontina de trevi',
        image: 'https://media.cntraveler.com/photos/5a903dd660543c4ae96c2e74/16:9/w_2560%2Cc_limit/GettyImages-497268617.jpg',
        albumId: 2
      },
      {
        tag: 'New',
        image: 'https://www.quotemaster.org/images/4d/4d50ca310be34ca5a2c479b31d8611c2.jpg',
        albumId: 3
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Photos', {})
  }
};
