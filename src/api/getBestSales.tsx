import axios from 'axios';
import { baseUrl } from '../core';

export const fetchBestSales = async (): Promise<any> => {
  try {
    return await axios.get(baseUrl + '/bestSales');
  } catch (e) {
    console.error(e);
  }
};

