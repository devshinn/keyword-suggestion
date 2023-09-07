import { Sick } from '../types';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;
export const getData = async (query: string): Promise<Sick[]> => {
  return await fetch(`${API_URL}/sick?q=${query}`).then(response => response.json());
};
