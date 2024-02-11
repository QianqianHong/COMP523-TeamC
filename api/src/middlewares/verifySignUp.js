import Roles from '../models/roleSchema'
import User from '../models/userSchema'

const checkDuplicateUsernameOrEmail = (req, res, next) => {
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err })
      return
    }

    if (user) {
      res.status(400).send({ message: 'Failed! Username is already in use!' })
      return
    }

    User.findOne({
      user_email: req.body.email,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err })
        return
      }

      if (user) {
        res.status(400).send({ message: 'Failed! Email is already in use!' })
        return
      }

      next()
    })
  })
}

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      Roles.findOne({ name: req.body.roles[i] }, (err, result) => {
        if (err) {
          res.status(500).send({ message: err })
          return
        }

        if (!result) {
          res.status(400).send({
            message: `Failed! Role ${req.body.roles[i]} does not exist!`,
          })
          return
        }

        next()
      })
    }
  } else {
    next()
  }
}

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
}

module.exports = verifySignUp
