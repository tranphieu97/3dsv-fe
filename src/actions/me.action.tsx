import axios from 'services/axios';
import { FETCH_USER, LOGOUT_USER } from './types';
import { Dispatch } from 'redux';

export const fetchUser = () => async (dispatch: Dispatch) => {
  const res = await axios.get('/me');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const logoutUser = () => async (dispatch: Dispatch) => {
  const res = await axios.get('/logout');
  if (res.status === 200) {
    dispatch({ type: LOGOUT_USER, payload: {} });
  }
};
