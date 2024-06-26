import { NextFunction, Request, Response } from 'express'
import { Document, Error } from 'mongoose'
import { Role } from '../models/roleSchema.js'
import { User } from '../models/userSchema.js'

export const checkDuplicateUsernameOrEmail = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
        res.status(400).send({ message: 'Failed! This email is already in use!' })
        return
      }

      next()
    })
  })
}

export const checkRolesExisted = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      Role.findOne(
        { name: req.body.roles[i] },
        (err: Error, result: Document) => {
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
        },
      )
    }
  } else {
    next()
  }
}
