const mongoose = require('mongoose');
console.log("helo")
const MONGODB_URI = 'mongodb://localhost:27017';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable.');
}

let cached = global.mongoose || { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) {
    console.log('Already connected to MongoDB');
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => {
      console.log('Connected to MongoDB');
      return mongoose;
    }).catch((error) => {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}
dbConnect()
module.exports = dbConnect;
