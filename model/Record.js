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

recordSchema.pre('save', async function(next) {
  if (this.isModified('reason') || this.isModified('description') || this.isModified('amount') || this.isModified('currency')) {
    this.lastUpdated = Date.now();
    console.log(`Last updated: ${this.lastUpdated}`)
  }
  next();
});

module.exports = mongoose.model('Record', recordSchema);
