/* eslint-disable import/prefer-default-export */
import padStart from 'lodash/padStart';
import { push } from 'connected-react-router';

import * as AT from '../constants/action-types';
import * as InvoiceSelectors from '../selectors/invoices-selector';
import * as Storage from '../store/storage';
import Statuses from '../constants/statuses';

export const deleteInvoice = id => async (dispatch) => {
  dispatch({ type: AT.DELETE_INVOICE, payload: { id } });

  await Storage.deleteInvoice(id);
};

export const createInvoice = (options = {}) => async (dispatch, getState) => {
  const { redirect } = options;

  const state = getState();
  const lastId = InvoiceSelectors.lastInvoiceIdSelector(state);

  const id = `SGI-${padStart(lastId + 1, 4, '0')}`;

  const invoice = {
    id,
    title: '',
    status: Statuses.PENDING,
  };

  dispatch({
    type: AT.CREATE_INVOICE,
    payload: {
      invoice,
    },
  });

  await Storage.pushOneInvoice({ ...invoice, id });

  if (redirect) {
    dispatch(push(`/invoices/${id}`));
  }
};

export const updateInvoice = (id, invoice) => async (dispatch) => {
  dispatch({
    type: AT.UPDATE_INVOICE,
    payload: {
      id,
      invoice,
    },
  });

  await Storage.pushOneInvoice({ ...invoice, id });
};

export const fetchAllInvoices = () => async (dispatch) => {
  dispatch({
    type: AT.INVOICES_FETCH,
  });

  setTimeout(async () => {
    dispatch({
      type: AT.INVOICES_FETCH_SUCCESS,
      payload: {
        invoices: Object.values(await Storage.fetchAllInvoices()),
      },
    });
  }, 1000);
};

export const fetchOneInvoice = id => async (dispatch) => {
  dispatch({
    type: AT.ONE_INVOICE_FETCH,
  });

  setTimeout(async () => {
    dispatch({
      type: AT.ONE_INVOICE_FETCH_SUCCESS,
      payload: {
        invoice: await Storage.fetchOneInvoice(id),
      },
    });
  }, 1000);
};
