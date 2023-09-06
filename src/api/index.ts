import { Sick } from '../types';

export const getData = async (query: string): Promise<Sick[]> => {
  return await fetch(`http://localhost:4000/sick?q=${query}`).then(response => response.json());
};
