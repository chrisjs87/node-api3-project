const Users = require('../users/users-model')
const Posts = require('../posts/posts-model')

function logger(req, res, next) {
  console.log(`${req.method} request`)
  console.log(`url: ${req.url}`)
  console.log(`Time stamp: ${new Date().toISOString()}`)
  next()
}

function validateUserId(req, res, next) {
  const { id } = req.params
  Users.getById(id)
    .then(user => {
      if(user){
      req.user = user
      next()
      } else {
      res.status(404).json({ message: 'user not found' })
      next()
      }
    })
}

function validateUser(req, res, next) {
  if (!req.body.name) {
    res.status(400).json({ message: 'missing required name field' })
  } else {
    next()
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

//MAYBE ADD A ERROR HANDLING MIDDLEWARE

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}