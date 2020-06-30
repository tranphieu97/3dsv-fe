import axios from 'services/axios';
import { FETCH_USER } from './types';
import { Dispatch } from 'redux';

export const fetchUser = () => async (dispatch: Dispatch) => {
  const res = await axios.get(`/me`);
  dispatch({ type: FETCH_USER, payload: res.data });
};
