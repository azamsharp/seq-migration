'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    queryInterface.addColumn(
      'Dishes',
      'imageURL',{
        type :Sequelize.STRING
      }

    )

  },

  down: (queryInterface, Sequelize) => {

    queryInterface.removeColumn(
      'Dishes',
      'imageURL'
    )

  }
};
