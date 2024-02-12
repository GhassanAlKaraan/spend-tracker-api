const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Load env and db
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5900;
connectDB();

// Make an express app and use json
const app = express();
app.use(express.json());

// Mount routers
//TODO

// Mount middleware
app.use(errorHandler);

// Now let's listen
const server = app.listen(PORT, console.log(`Server running on port: ${PORT}`));

// Handle any server errors
process.on('unhandledRejection', (err) => {
  console.log(`Sorry unhandled error, check code: ${err.message}`);
  server.close(() => process.exit(1));
});
