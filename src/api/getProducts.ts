import axios from 'axios';
import { baseUrl } from '../core';

export const fetchProducts = async (): Promise<any> => {
  try {
    return await axios.get(baseUrl + '/products');
  } catch (e) {
    console.error(e);
  }
};