import mongoose from 'mongoose';
import usersData from './data/usersdata';
import './src/models/user';

async function addData() {
  const MONGODB_URI = 'mongodb+srv://amyishere0602:Amyit0602@cluster0.glogh2t.mongodb.net/mydatabase?retryWrites=true&w=majority';

  try {
    await mongoose.connect(MONGODB_URI);

    console.log('Connected to MongoDB Atlas');

    // Add data to MongoDB
    const User = mongoose.model('User');
    await User.insertMany(usersData);
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
