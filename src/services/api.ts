import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://private-b5dec0-desafio5.apiary-mock.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default axiosConfig;
