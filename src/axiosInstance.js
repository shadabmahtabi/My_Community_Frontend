// src/axiosInstance.js
import axios from 'axios';

// Create an axios instance with the base URL of your backend
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',  // Backend URL where your Node.js app is running
  timeout: 5000, // Timeout in case the request takes too long
});

export default axiosInstance;
