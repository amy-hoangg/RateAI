import mongoose from 'mongoose';
import newsData from './data/newsdata';
import './src/models/new';

// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

async function addData() {
  const MONGODB_URI = process.env.MONGODB_URI;
  
  if (!MONGODB_URI) {
    console.error('Error: MongoDB URI not defined in environment variables.');
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGODB_URI);

    console.log('Connected to MongoDB Atlas');

    // Add data to MongoDB
    const New = mongoose.model('New');
    await New.insertMany(newsData);
    console.log('Data added successfully.');

    // Close the connection after adding data
    await mongoose.connection.close();
    console.log('Connection closed.');
  } 
  
  catch (error) {
    console.error('Error:', error);
  }
}

addData().catch((error) => {
  console.error('Error in addData function:', error);
});
