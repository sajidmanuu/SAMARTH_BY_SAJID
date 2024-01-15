// const mongoose=require('mongoose');
// mongoose.connect("mongodb://0.0.0.0:27017/e-commerce");
const mongoose = require('mongoose');

// Connect to the database
mongoose.connect("mongodb://0.0.0.0:27017/e-commerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Event handlers for successful and error connection
db.on('error', (error) => {
  console.error('Connection error:', error);
});

db.once('open', () => {
  console.log('Connected to the database!');
});
