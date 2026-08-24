import axios from 'axios';

const API_URL = 'https://metrik-backend-df0u.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
