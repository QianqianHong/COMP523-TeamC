import { Request, Response } from 'express'
import * as personLevelServices from '../services/personLevelServices.js'

/* Get all controller to retrieve all records. Result variable checks for success. */
export async function getAllRecords(req: Request, res: Response) {
  try {
    var result = await personLevelServices.getAllRecordsFromDB()
    if (result) {
      res.status(200).jsonp(result)
    } else {
      res.status(200).json({ success: true, msg: 'No records found.' })
    }
  } catch (e) {
    const err = e as Error
    console.error(err.message)
    res.status(500).json({ success: false, msg: 'Failed to retrieve records.' })
  }
}

/* Get specific record controller to retrieve a record. Result variable checks for success. */
export async function getRecord(req: Request, res: Response) {
  var id = req.params.id
  try {
    var result = await personLevelServices.getRecordFromDB(id)
    if (result) {
      res.status(200).jsonp(result)
    } else {
      res.status(200).json({ success: true, msg: 'Record not found.' })
    }
  } catch (e) {
    const err = e as Error
    console.error(err.message)
    res.status(500).json({ success: false, msg: 'Failed to retrieve record.' })
  }
}

/* Add a record controller to add a record. Status variable checks for success. */
export async function addRecord(req: Request, res: Response) {
  var body = req.body
  try {
    var status = await personLevelServices.addRecordToDB(body)
    if (status) {
      res.status(200).json({ success: true, msg: 'Record already exists.' })
    } else {
      res.status(200).json({ success: true, msg: 'Record added.' })
    }
  } catch (e) {
    const err = e as Error
    console.error(err.message)
    res.status(500).json({ success: false, msg: 'Failed to add record.' })
  }
}

/* Update a record controller to update a record. Status variable checks for success. */
export async function updateRecord(req: Request, res: Response) {
  var id = req.params.id
  var body = req.body

  try {
    var status = await personLevelServices.updateRecordInDB(id, body)
    if (status) {
      res
        .status(200)
        .json({ success: true, msg: 'Successfully updated the record.' })
    } else {
      res.status(200).json({ success: true, msg: 'Record not found.' })
    }
  } catch (e) {
    const err = e as Error
    console.error(err.message)
    res.status(500).json({ success: false, msg: 'Failed to update record.' })
  }
}

/* Delete a record controller to delete a record. Status variable checks for success. */
export async function deleteRecord(req: Request, res: Response) {
  var id = req.params.id
  try {
    var status = await personLevelServices.deleteRecordFromDB(id)
    if (status) {
      res.status(200).json({ success: true, msg: 'Record deleted.' })
    } else {
      res.status(200).json({ success: true, msg: 'Record not found.' })
    }
  } catch (e) {
    const err = e as Error
    console.error(err.message)
    res.status(500).json({ success: false, msg: 'Failed to delete record.' })
  }
}

/* Delete all records controller to delete all records. Result variable checks for success. */
export async function deleteAllRecords(req: Request, res: Response) {
  try {
    var result = await personLevelServices.deleteAllRecordsFromDB()
    if (result) {
      res.status(200).jsonp(result)
    } else {
      res.status(200).json({ success: true, msg: 'No records found.' })
    }
  } catch (e) {
    const err = e as Error
    console.error(err.message)
    res.status(500).json({ success: false, msg: 'Failed to delete records.' })
  }
}

/* Upload a CSV File into the records */
export async function uploadCSVFile(req: Request, res: Response) {
  var csv = req.body
  console.log('This is the csv: ' + csv)
  try {
    var result = await personLevelServices.uploadCSVtoDB()
    if (result) {
      res.status(200).jsonp(result)
    } else {
      res.status(200).json({ success: true, msg: 'Record not found.' })
    }
  } catch (e) {
    const err = e as Error
    console.error(err.message)
    res.status(500).json({ success: false, msg: 'Failed to upload CSV.' })
  }
}
