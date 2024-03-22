import { Document, Error } from 'mongoose'
import { staffingModel } from '../models/staffingSchema.js'

/* Runs mongoose function to get all records from the database */
export async function getAllRecordsFromDB() {
  var records = await staffingModel
    .find(function (err, docs) {
      if (err) {
        throw err
      } else {
        if (docs) {
          console.log('Found all records.')
        } else {
          console.log('No records found.')
        }
      }
    })
    .clone()

  return records
}

/* Runs mongoose function to find a specific record */
export async function getRecordFromDB(id: string) {
  var record = await staffingModel
    .findOne({ staff_name: id }, (err: Error, doc: Document) => {
      if (err) {
        throw err
      } else {
        if (doc) {
          console.log('Found ' + doc)
        } else {
          console.log('Could not find record with uid: ' + id)
        }
      }
    })
    .clone()

  return record
}

/* Runs mongoose function to find records provided by this provide */
export async function getMyRecordsFromDB(id: string) {
  var record = await staffingModel
    .findOne({ uid: id }, (err: Error, doc: Document) => {
      if (err) {
        throw err
      } else {
        if (doc) {
          console.log('Found ' + doc)
        } else {
          console.log('Could not find record with uid: ' + id)
        }
      }
    })
    .clone()

  return record
}

/* Runs mongoose function to add an entire record to the database */
export async function addRecordToDB(body: any) {
  var record = new staffingModel(body)
  var status = await staffingModel
    .findOne(body, (err: Error, doc: Document) => {
      if (err) {
        throw err
      } else {
        if (doc) {
          console.log('Record already exists.')
        } else {
          record.save(function (err, doc) {
            if (err) {
              throw err
            } else {
              console.log('Added ' + doc)
            }
          })
        }
      }
    })
    .clone()

  return status
}

/* Runs mongoose function that finds a record by an ID and updates it with whatever input */
export async function updateRecordInDB(id: string, body: object) {
  var status = await staffingModel
    .findOneAndUpdate({ staff_name: id }, body, (err: Error, doc: Document) => {
      if (err) {
        throw err
      } else {
        if (doc) {
          console.log('Successfully updated the record to: ' + doc)
        } else {
          console.log('No record found to update.')
        }
      }
    })
    .clone()

  return status
}

/* Runs mongoose function to find a record by an ID and delete it */
export async function deleteRecordFromDB(id: string) {
  var status = await staffingModel.findOne({ staff_name: id })

  await staffingModel
    .findOneAndDelete({ staff_name: id }, (err: Error, doc: Document) => {
      if (err) {
        throw err
      } else {
        if (doc) {
          console.log('Successfully deleted record :' + doc)
        } else { 
          console.log('id is ' + id)
          console.log('No record found to delete.')
        }
      }
    })
    .clone()

  return status
}

/* Runs mongoose function to delete all records in the database */
export async function deleteAllRecordsFromDB() {
  var records = await staffingModel
    .deleteMany({}, (err: Error, doc: Document) => {
      if (err) {
        throw err
      } else {
        if (doc) {
          console.log('Deleted all records.')
        } else {
          console.log('No records found.')
        }
      }
    })
    .clone()

  return records
}
