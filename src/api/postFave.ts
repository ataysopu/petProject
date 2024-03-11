import axios from 'axios';
import { baseUrl } from '../core';

export const postFaveProduct = async (data: any): Promise<any> => {
  try {
    return await axios.post(baseUrl + '/faves', data);
  } catch (e) {
    console.error(e);
  }
};