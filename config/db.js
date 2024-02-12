const mongoose = require('mongoose');

const connectDB = async () => {
    const con = await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
};

module.exports = connectDB;