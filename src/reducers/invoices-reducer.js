import { combineReducers } from 'redux';
import * as AT from '../constants/action-types';

export const listReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case AT.INVOICES_FETCH_SUCCESS:
      return action.payload.invoices.map(({ id }) => id);
    case AT.DELETE_INVOICE:
      return state.filter(invoiceId => invoiceId !== action.payload.id);
    case AT.CREATE_INVOICE:
      return [...state, action.payload.invoice.id];

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
    case AT.DELETE_INVOICE:
      return {
        ...state,
        [action.payload.id]: null,
      };
    case AT.CREATE_INVOICE:
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
      return true;
    case AT.INVOICES_FETCH_SUCCESS:
      return false;

    default:
      return state;
  }
};

export const lastIdReducer = (state = 0, action = {}) => {
  switch (action.type) {
    case AT.CREATE_INVOICE:
      return state + 1;

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
