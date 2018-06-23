import { connect } from 'react-redux';
import compose from 'compose-function';
import lifecycle from 'react-pure-lifecycle';
import { push } from 'connected-react-router';

import { InvoiceList } from '../components/InvoiceList';

import * as InvoiceSeletors from '../selectors/invoices-selector';
import * as InvoiceActions from '../actions/invoices-actions';

export const InvoicesListContainer = compose(
  connect(
    state => ({
      loading: InvoiceSeletors.loadingInvoicesSelector(state),
      invoices: InvoiceSeletors.allInvoicesSelector(state),
    }),
    dispatch => ({
      onGoToInvoice: id => dispatch(push(`/invoices/${id}`)),
      onDeleteInvoice: id => dispatch(InvoiceActions.deleteInvoice(id)),
      onCreateInvoice: () => dispatch(InvoiceActions.createInvoice({ redirect: true })),
      fetchAllInvoices: () => dispatch(InvoiceActions.fetchAllInvoices()),
    }),
  ),
  lifecycle({
    componentDidMount({ fetchAllInvoices }) {
      fetchAllInvoices();
    },
  }),
)(InvoiceList);

export default InvoicesListContainer;
