import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './auth-reducer';
import invoices from './invoices-reducer';

export const rootReducer = combineReducers({
  form,
  auth,
  invoices,
});

export default rootReducer;
