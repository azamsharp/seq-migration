'use strict';
module.exports = (sequelize, DataTypes) => {
  var Incredient = sequelize.define('Incredient', {
    name: DataTypes.STRING,
    quantity: DataTypes.DOUBLE
  }, {});
  Incredient.associate = function(models) {
    // associations can be defined here
  };
  return Incredient;
};