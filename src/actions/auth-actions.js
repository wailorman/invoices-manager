/* eslint-disable import/prefer-default-export */

import { stopSubmit } from 'redux-form';
import { push } from 'connected-react-router';
import * as AT from '../constants/action-types';

export const auth = ({ login, password } = {}) => (dispatch) => {
  dispatch({
    type: AT.AUTH_FETCH,
  });

  if (login === 'root' && password === '123') {
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
};
