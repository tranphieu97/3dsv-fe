import axios from 'services/axios';
import { Dispatch } from 'redux';
import { FETCH_ITEMS } from './types';
import { AxiosResponse } from 'axios';

export const fetchItems = () => async (dispatch: Dispatch) => {
  const res: AxiosResponse = await axios.get('/items');
  dispatch({ type: FETCH_ITEMS, payload: res.data });
};
