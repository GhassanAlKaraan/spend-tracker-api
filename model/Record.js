const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  type :{
    type: String,
    enum: ['family', 'other', 'transport', 'food', 'health'],
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    enum: ['LBP', 'USD'],
    required: true,
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Record', recordSchema);
