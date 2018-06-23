import { combineReducers } from 'redux';
import uniq from 'lodash/uniq';
import omit from 'lodash/omit';

import * as AT from '../constants/action-types';

export const listReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case AT.INVOICES_FETCH_SUCCESS:
      return action.payload.invoices.map(({ id }) => id);
    case AT.ONE_INVOICE_FETCH_SUCCESS:
      return uniq([...state, action.payload.invoice.id]);
    case AT.DELETE_INVOICE:
      return state.filter(invoiceId => invoiceId !== action.payload.id);
    case AT.CREATE_INVOICE:
      return uniq([...state, action.payload.invoice.id]);

    default:
      return state;
  }
};

export const objectsReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case AT.INVOICES_FETCH_SUCCESS:
      return action.payload.invoices.reduce(
        (prev, curInvoice) => ({
          ...prev,
          [curInvoice.id]: curInvoice,
        }),
        {},
      );
    case AT.ONE_INVOICE_FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.invoice.id]: action.payload.invoice,
      };

    case AT.DELETE_INVOICE:
      return omit(state, action.payload.id);

    case AT.CREATE_INVOICE:
    case AT.UPDATE_INVOICE:
      return {
        ...state,
        [action.payload.invoice.id]: action.payload.invoice,
      };

    default:
      return state;
  }
};

export const loadingReducer = (state = false, action = {}) => {
  switch (action.type) {
    case AT.INVOICES_FETCH:
    case AT.ONE_INVOICE_FETCH:
      return true;

    case AT.INVOICES_FETCH_SUCCESS:
    case AT.ONE_INVOICE_FETCH_SUCCESS:
      return false;

    default:
      return state;
  }
};

export const lastIdReducer = (state = 0, action = {}) => {
  switch (action.type) {
    case AT.CREATE_INVOICE:
      return state + 1;

    case AT.UPDATE_LAST_INVOICE_ID:
      return action.payload;

    default:
      return state;
  }
};

export const invoicesReducer = combineReducers({
  list: listReducer,
  objects: objectsReducer,
  loading: loadingReducer,
  lastId: lastIdReducer,
});

export default invoicesReducer;
