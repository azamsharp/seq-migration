'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    ispublished: DataTypes.BOOLEAN
  }, {});
  Post.associate = function(models) {
    Post.hasMany(models.Comment, {as : 'comments', foreignKey: 'postid'})
  };
  return Post;
};
