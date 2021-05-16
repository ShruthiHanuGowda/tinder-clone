import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-app-tinder-backend.herokuapp.com',
});

export default instance;
