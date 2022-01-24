import axios from 'axios';

export const axiosInstanceWithAuth = axios.create({
  baseURL: 'http://10.0.2.2:4000/',
});
