import mongoose from "mongoose";
import dbConfig from "./db.config";

import personLevelSchema from "./models/personLevelSchema";
import closedSchema from "./models/closedSchema";
import staffingSchema from "./models/staffingSchema";
import jobDevSchema from "./models/jobDevSchema";
import IPSLogSchema from "./models/IPSLogSchema";
import userSchema from "./models/userSchema";
import roleSchema from "./models/roleSchema";

mongoose.Promise = global.Promise;

/* 
Creating a db instance and connecting to MongoDB through mongoose.
Adding the MongoDB database URI and initializing the survey collections
*/

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.personLevel = personLevelSchema(mongoose);
db.closed = closedSchema(mongoose);
db.staffing = staffingSchema(mongoose);
db.jobDev = jobDevSchema(mongoose);
db.IPSLog = IPSLogSchema(mongoose);
db.user = userSchema(mongoose);
db.roles = roleSchema(mongoose);
module.exports = db;
