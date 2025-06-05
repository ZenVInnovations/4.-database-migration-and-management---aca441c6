'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Ananyashree',
        email: 'ananyashree@example.com',
        createdAt: new Date(),
      },
      {
        name: 'Test User',
        email: 'test@example.com',
        createdAt: new Date(),
      },
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};