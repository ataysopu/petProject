import axios from 'axios';
import { baseUrl } from '../core';

export const fetchFaves = async (): Promise<any> => {
  try {
    return await axios.get(baseUrl + `/faves`);
  } catch (e) {
    console.error(e);
  }
};