import axios from 'axios';

const baseURL = 'http://localhost:8080';
export const apiURL = '/api/v1/movies';

export default axios.create({
  baseURL: baseURL,
  headers: {
    'ngrok-skip-browser-warning': 'true',
  },
});
