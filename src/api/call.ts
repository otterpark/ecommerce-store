// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const url = process.env.API_URL;

export const api = axios.create({
  baseURL: url,
});
