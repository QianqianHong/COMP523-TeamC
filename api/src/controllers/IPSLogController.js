import IPSLogServices from '../services/IPSLogServices'

/* Get all controller to retrieve all records. Result variable checks for success. */
export async function getAllRecords(req, res) {
  try {
    var result = await IPSLogServices.getAllRecordsFromDB()
    if (result) {
      res.status(200).jsonp(result)
    } else {
      res.status(200).json({ success: true, msg: 'No records found.' })
    }
  } catch (e) {
    console.log(e.message)
    res.status(500).json({ success: false, msg: 'Failed to retrieve records.' })
  }
}

/* Get specific record controller to retrieve a record. Result variable checks for success. */
export async function getRecord(req, res) {
  var id = req.params.id
  try {
    var result = await IPSLogServices.getRecordFromDB(id)
    if (result) {
      res.status(200).jsonp(result)
    } else {
      res.status(200).json({ success: true, msg: 'Record not found.' })
    }
  } catch (e) {
    console.log(e.message)
    res.status(500).json({ success: false, msg: 'Failed to retrieve record.' })
  }
}

/* Add a record controller to add a record. Status variable checks for success. */
export async function addRecord(req, res) {
  var body = req.body
  try {
    var status = await IPSLogServices.addRecordToDB(body)
    if (status) {
      res.status(200).json({ success: true, msg: 'Record already exists.' })
    } else {
      res.status(200).json({ success: true, msg: 'Record added.' })
    }
  } catch (e) {
    console.log(e.message)
    res.status(500).json({ success: false, msg: 'Failed to add record.' })
  }
}

/* Update a record controller to update a record. Status variable checks for success. */
export async function updateRecord(req, res) {
  var id = req.params.id
  var body = req.body

  try {
    var status = await IPSLogServices.updateRecordInDB(id, body)
    if (status) {
      res
        .status(200)
        .json({ success: true, msg: 'Successfully updated the record.' })
    } else {
      res.status(200).json({ success: true, msg: 'Record not found.' })
    }
  } catch (e) {
    console.log(e.message)
    res.status(500).json({ success: false, msg: 'Failed to update record.' })
  }
}

/* Delete a record controller to delete a record. Status variable checks for success. */
export async function deleteRecord(req, res) {
  var id = req.params.id
  try {
    var status = await IPSLogServices.deleteRecordFromDB(id)
    if (status) {
      res.status(200).json({ success: true, msg: 'Record deleted.' })
    } else {
      res.status(200).json({ success: true, msg: 'Record not found.' })
    }
  } catch (e) {
    console.log(e.message)
    res.status(500).json({ success: false, msg: 'Failed to delete record.' })
  }
}

/* Delete all records controller to delete all records. Result variable checks for success. */
export async function deleteAllRecords(req, res) {
  try {
    var result = await IPSLogServices.deleteAllRecordsFromDB()
    if (result) {
      res.status(200).jsonp(result)
    } else {
      res.status(200).json({ success: true, msg: 'No records found.' })
    }
  } catch (e) {
    console.log(e.message)
    res.status(500).json({ success: false, msg: 'Failed to delete records.' })
  }
}
