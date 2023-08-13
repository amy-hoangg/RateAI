import axios from 'axios';

const baseUrl = 'http://localhost:3003/api/login'; // Update the URL accordingly

const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(baseUrl, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

export default {
    login
}