const express = require('express'); // need express

const {
  getRecords,
  getRecord,
  createRecord,
  updateRecord,
  deleteRecord,
} = require('../controller/records'); // need controller methods

const Record = require('../model/Record'); // need the model

const router = express.Router(); // need a new express router

router.route('/').get(getRecords).post(createRecord);
router.route('/:id').get(getRecord).put(updateRecord).delete(deleteRecord);

module.exports = router;