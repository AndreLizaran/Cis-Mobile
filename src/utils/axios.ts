import axios from 'axios';

export const axiosInstanceWithAuth = axios.create({
  baseURL: 'https://cis-mobile-backend-dummy.herokuapp.com/',
});
