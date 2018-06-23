import * as AT from '../constants/action-types';

export const authReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case AT.AUTH_FETCH:
      return { loading: true };
    case AT.AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
      };
    case AT.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
      };
    case AT.UNAUTH:
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
