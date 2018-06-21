'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      queryInterface.addColumn(
        'Incredients',
        'dishId', {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Dishes',
            key: 'id'
          }
        }
      )

  },

  down: (queryInterface, Sequelize) => {

    queryInterface.removeColumn(
      'Incredients',
      'dishId'
    )

  }
};
