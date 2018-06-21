'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dish = sequelize.define('Dish', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    quantity: DataTypes.DOUBLE,
    course: DataTypes.STRING,
    imageURL: DataTypes.STRING

  }, {});
  Dish.associate = function(models) {
    // associations can be defined here
  };
  return Dish;
};
