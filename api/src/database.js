import mongoose from 'mongoose'

mongoose.Promise = global.Promise

/* 
Creating a db instance and connecting to MongoDB through mongoose.
Adding the MongoDB database URI and initializing the survey collections
*/

const db = {}
// db.mongoose = mongoose
// db.url = dbConfig.url
// db.personLevel = personLevelSchema(mongoose)
// db.closed = closedSchema(mongoose)
// db.staffing = staffingSchema(mongoose)
// db.jobDev = jobDevModel
// db.IPSLog = IPSLogSchema(mongoose)
// db.user = userSchema(mongoose)
// db.roles = roleSchema(mongoose)
module.exports = db
