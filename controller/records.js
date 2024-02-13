const asyncHandler = require('../middleware/async');
const Record = require('../model/Record');

// @desc    Get All Records
// @route   GET /api/v1/records
// @access  Public
exports.getRecords = asyncHandler(async (req, res, next) => {
  // Get all Records from mongodb collection
  const records = await Record.find();

  if (!records) {
    return res
      .status(404)
      .json({ success: false, data: 'Error fetching records' });
  }
  if (records.length === 0) {
    return res.status(200).json({ success: true, data: [] });
  }

  return res.status(200).json({ success: true, data: records });
});

// @desc    Get Single Record
// @route   GET /api/v1/records/:id
// @access  Public
exports.getRecord = asyncHandler(async (req, res, next) => {
  const record = await Record.findById(req.params.id);

  if (!bootcamp) {
    return res.status(404).json({
      success: false,
      data: `No record found with id ${req.params.id}`,
    });
  }

  res.status(200).json({ success: true, data: record });
});

// @desc    Create Record
// @route   POST /api/v1/records
// @access  Public
exports.createRecord = asyncHandler(async (req, res, next) => {
  let record;
  try {
    record = await Record.create(req.body);
  } catch (_) {
    return res
      .status(400)
      .json({ success: false, data: 'Could not create record' });
  }

  res.status(201).json({
    success: true,
    data: record,
  });
});

// @desc    Update Single Record
// @route   PUT /api/v1/records/:id
// @access  Public
exports.updateRecord = asyncHandler(async (req, res, next) => {
  let record = await Record.findById({ id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!record) {
    return res.status(404).json({
      success: false,
      data: `No record found with id ${req.params.id}`,
    });
  }

  try {
    record = await Record.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ success: false, data: 'Could not update record' });
  }

  res.status(200).json({ success: true, data: record });
});

// @desc    Delete Single Record
// @route   DELETE /api/v1/records/:id
// @access  Public
exports.deleteRecord = asyncHandler(async (req, res, next) => {
  const record = await Record.findById(req.params.id);

  if (!record) {
    return res.status(404).json({
      success: false,
      data: `No record found with id ${req.params.id}`,
    });
  }

  await record.deleteOne();

  res.status(200).json({
    success: true,
    data: {},
  });
});
