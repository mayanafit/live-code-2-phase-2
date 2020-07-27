'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
    */
   await queryInterface.bulkInsert('Animals', [
      {
        id: 1,
        name: "Koala",
        imageUrl: "https://a-z-animals.com/media/animals/images/470x370/koala9.jpg",
        description: "Spends up to 80% of the time sleeping or resting!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Red Panda",
        imageUrl: "https://a-z-animals.com/media/animals/images/470x370/red_panda5.jpg",
        description: "There are less than 3,000 left in the wild!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Artic Fox",
        imageUrl: "https://a-z-animals.com/media/animals/images/470x370/arctic_fox_11.jpg",
        description: "Extremely thick winter fur!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Cat",
        imageUrl: "https://a-z-animals.com/media/animals/images/470x370/cat_14.jpg",
        description: "Cutest creature in this world!",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Animals', null, {});
  }
};
