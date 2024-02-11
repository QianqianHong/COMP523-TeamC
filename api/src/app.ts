import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import dbConfig from './db.config'

import { Role } from './models/roleSchema'
import routes from './routes/index'

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

mongoose
  .connect(dbConfig.url, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!')
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err)
    process.exit()
  })

function initialize() {
  Role.estimatedDocumentCount((err: Error, count: number) => {
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

initialize()

app.use('/', routes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
