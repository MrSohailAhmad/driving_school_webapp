import { APIURL } from '../setupAxios.js';
import axios from 'axios';

export function loginUserApi(payload) {
  return axios.post(APIURL + '/user/login', payload);
}

export function getUsers() {
  return axios.get(APIURL + '/user/users');
}

console.log(APIURL + '/user/login');
