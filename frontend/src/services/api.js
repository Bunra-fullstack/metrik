import axios from 'axios';

const API_URL = 'https://psychic-funicular-967rgwvrv9gp3rxj-5000.app.github.dev/api';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
