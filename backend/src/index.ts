// index.ts

import mongoose from 'mongoose';
import app from './app';
// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Error: MongoDB URI not defined in environment variables.');
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

