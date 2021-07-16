import defaultAxios from 'axios';
import Interceptor from './interceptor';

const BASE_URL = process.env.MOVIES_API_URL;
const API_KEY = process.env.MOVIES_API_KEY;

const createApi = async () => {
  const api = defaultAxios.create({
    baseURL: `${BASE_URL}?apikey=${API_KEY}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  Interceptor(api);

  return api;
};

export default createApi;
