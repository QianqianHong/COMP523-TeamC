import jwt from 'jsonwebtoken'
import config from '../auth.config'
import { User } from '../models/userSchema'

export const getCurrentUser = (req, res) => {
  const usertoken = req.headers.authorization
  const token = usertoken.split(' ')
  const decoded = jwt.verify(token[1], config.secret)
  var userId = decoded.id
  User.find({ _id: userId }, (err, result) => {
    if (err) {
      console.error(err)
      return
    } else {
      if (result.length > 0) {
        const info = new Object()
        info.username = result[0].username
        info.firstName = result[0].user_fame
        info.lastName = result[0].user_lname
        info.email = result[0].user_email
        res.json(info)
      }
    }
  })
}
