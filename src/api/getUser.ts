import axios from 'axios';
import { baseUrl } from '../core';

export const fetchUser = async (id: string): Promise<any> => {
  try {
    return await axios.get(baseUrl + `/users/${id}`);
  } catch (e) {
    console.error(e);
  }
};