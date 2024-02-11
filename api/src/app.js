import cors from 'cors'
import express from 'express'

import db from './database'
import routes from './routes/index'

import Role from './models/roleSchema'

import authRoutes from './routes/authRoutes'
import { getCurrentUser } from './routes/getCurrentUserRoutes'
import { getUserInfo } from './routes/getUserInfoRoutes'
import { setUserInfo } from './routes/setUserInfoRoutes'
import userRoutes from './routes/userRoutes'
import verifyEmailRoutes from './routes/verifyEmailRoutes'

/* Creating an express app on port 8080 */
const app = express()
const port = 3000

/* Initializing cors */
var corsOptions = {
  origin: 'http://localhost:4200',
}

app.use(cors(corsOptions))

/* Allowing express to use jsons */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* Connecting to MongoDB database through mongoose */
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!')
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err)
    process.exit()
  })

// Initialize database
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save((err) => {
        if (err) {
          console.log('error', err)
        }

        console.log("added 'user' to roles collection")
      })

      new Role({
        name: 'admin',
      }).save((err) => {
        if (err) {
          console.log('error', err)
        }

        console.log("added 'admin' to roles collection")
      })
    }
  })
}

initial()

/* Connecting to routers */

app.use('/', routes)
userRoutes(app)
verifyEmailRoutes(app)
authRoutes(app)
app.use('/userInfo', getUserInfo)
app.use('/user-setting', setUserInfo)
app.use('/current-user', getCurrentUser)

/* Show the app started */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
