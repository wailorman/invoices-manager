import * as AT from '../constants/action-types';

export const authReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case AT.AUTH_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    default:
      return state;
  }
};

export default authReducer;
