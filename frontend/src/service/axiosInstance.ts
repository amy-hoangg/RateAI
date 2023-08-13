import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3003/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add an interceptor to attach the Bearer token to requests
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
