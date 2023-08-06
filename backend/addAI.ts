import mongoose from 'mongoose';
import aiData from './data/aisdata';
import './src/models/ai';
import './src/models/user'; // Import the User model as well

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

    // Fetch user data from MongoDB and populate ai_user_id with User document using _id
    const AI = mongoose.model('AI');
    await AI.insertMany(aiData);

    console.log('Data added successfully.');

    // Close the connection after adding data
    await mongoose.connection.close();
    console.log('Connection closed.');
  } catch (error) {
    console.error('Error:', error);
  }
}

addData().catch((error) => {
  console.error('Error in addData function:', error);
});
