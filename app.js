
const models = require('./models')
/*
let post = models.Post.build({
  title : 'Hello Sequelize 2',
  body : 'body',
  ispublished : true,
  comments : [
    {
      title : 'Hello comment1',
      body : 'body comment',
      ispublished : false,
    }
  ]
},{
  include :[
    {
        model : models.Comment,
        as : 'comments'
    }
  ]
})

post.save().then(function(newPost){
  console.log(newPost)
})

*/



/*
models.Post.findOne({
  where: {
    id : 2
  },
  include: [
    {
      model : models.Comment,
      as : 'comments'
    }
  ]
}).then(function(post){



  console.log(post)
}) */

/*
models.Comment.findOne({
  where: {
    id : 1
  },
  include: [
  {
    model : models.Post,
    as : 'post'
  }
  ]
}).then(function(comment){
  console.log(comment.post)
}) */


/*

// create a post
let post = models.Post.build({
  title : 'first post',
  body : 'body',
  ispublished : false
})

post.save().then(function(savedPost){

  let comment = models.Comment.build({
    title : 'first comment',
    body : 'body',
    ispublished : false,
    postid : post.id
  })

  comment.save().then(function(newComment){
    console.log(newComment)
  })

}) */


/*
let dish = models.Dish.build({
  name: 'Dish 100',
  price: 4.5,
  quantity: 10,
  course: 'Breakfast',
  imageURL: 'someimage'
})

dish.save().then(function(newDish){
  console.log(newDish)
}) */
