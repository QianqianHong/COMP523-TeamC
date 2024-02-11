import express from 'express'
import User from '../models/userSchema'
const router = express.Router()

router.get('/', (req, res) => {
  const email = req.query.email
  User.find({ user_email: email }, (err, result) => {
    if (err) {
      console.error(err)
      return
    } else {
      const info = new Object()
      info.firstName = result[0].user_fname
      info.lastName = result[0].user_lname
      info.email = result[0].user_email
      res.json(info)
    }
  })
})

module.exports = router
