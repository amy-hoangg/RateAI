// index.ts

import mongoose from 'mongoose';
import app from './app';

const MONGODB_URI = 'mongodb+srv://amyishere0602:Amyit0602@cluster0.glogh2t.mongodb.net/mydatabase?retryWrites=true&w=majority'; // Replace with your actual MongoDB connection URI
const PORT = 3003;

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

