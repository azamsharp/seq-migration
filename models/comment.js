'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    ispublished: DataTypes.BOOLEAN,
    postid :DataTypes.INTEGER
  }, {});

Comment.associate = function(models) {
  Comment.belongsTo(models.Post,{ as : 'post', foreignKey: 'postid' })
};
  return Comment;
};
