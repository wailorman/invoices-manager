/* eslint-disable import/prefer-default-export */

import { stopSubmit } from 'redux-form';
import { push } from 'connected-react-router';

import * as AT from '../constants/action-types';
import * as Storage from '../store/storage';

export const auth = ({ login, password } = {}) => async (dispatch) => {
  dispatch({
    type: AT.AUTH_FETCH,
  });

  setTimeout(async () => {
    const isCorrect = await Storage.logIn(login, password);

    if (isCorrect) {
      dispatch({
        type: AT.AUTH_SUCCESS,
      });
      dispatch(stopSubmit('auth'));
      dispatch(push('/'));
    } else {
      dispatch({
        type: AT.AUTH_FAILURE,
      });
      dispatch(stopSubmit('auth', { password: 'Incorrect password' }));
    }
  }, 1000);
};

export const fetchCredentials = () => async (dispatch) => {
  dispatch({
    type: AT.AUTH_FETCH,
  });

  setTimeout(async () => {
    const storageCredentials = await Storage.fetchCredentials();

    if (storageCredentials && storageCredentials.loggedIn) {
      dispatch({
        type: AT.AUTH_SUCCESS,
      });
    } else {
      dispatch({
        type: AT.AUTH_FAILURE,
      });
    }
  }, 1000);
};

export const unauth = () => async (dispatch) => {
  dispatch({
    type: AT.UNAUTH,
  });
  await Storage.logOut();
};
