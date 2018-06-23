/* eslint-disable import/prefer-default-export */
import { push } from 'connected-react-router';
import padStart from 'lodash/padStart';

import * as AT from '../constants/action-types';
import * as InvoiceSelectors from '../selectors/invoices-selector';
import Statuses from '../constants/statuses';

export const goToInvoice = id => (dispatch) => {
  dispatch(push(`/invoices/${id}`));
};

export const deleteInvoice = id => (dispatch) => {
  dispatch({ type: AT.DELETE_INVOICE, payload: { id } });
};

export const createInvoice = () => (dispatch, getState) => {
  const state = getState();
  const lastId = InvoiceSelectors.lastInvoiceIdSelector(state);

  const newId = `SGI-${padStart(lastId + 1, 4, '0')}`;

  const newInvoice = {
    id: newId,
    title: 'New invoice',
    status: Statuses.PENDING,
  };

  dispatch({
    type: AT.CREATE_INVOICE,
    payload: {
      invoice: newInvoice,
    },
  });

  // const idNumbers = invoicesList.map((id) => {
  //   const match = id.match(/\d+/gi);
  //   return match ? +match[0] : 0;
  // });

  // const

  // debugger;
};

export const fetchInvoices = () => (dispatch) => {
  dispatch({
    type: AT.INVOICES_FETCH,
  });

  setTimeout(() => {
    dispatch({
      type: AT.INVOICES_FETCH_SUCCESS,
      payload: {
        invoices: [
          {
            id: 'SGI-0001',
            title: 'New title',
            body: 'Lorem\nipsum',
            status: Statuses.IN_PROGRESS,
          },
        ],
      },
    });
  }, 1500);
};
