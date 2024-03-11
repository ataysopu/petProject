import axios from 'axios';
import { baseUrl } from '../core';

export const delFaves = async (id: string): Promise<any> => {
  try {
    return await axios.delete(baseUrl + `/faves/${id}`);
  } catch (e) {
    console.error(e);
  }
};