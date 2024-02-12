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
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model('Record', recordSchema);
