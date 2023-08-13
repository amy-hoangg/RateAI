import axios from 'axios';

const baseUrl = 'http://localhost:3003/api/login'; // Update the URL accordingly

const login = async (user_name: string, user_password: string) => {
  try {
    const response = await axios.post(baseUrl, {
      user_name,
      user_password,
    });
    return response.data;
  } 
  catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export default {
    login
}