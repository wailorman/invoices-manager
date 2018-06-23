import { connect } from 'react-redux';
import compose from 'compose-function';
import lifecycle from 'react-pure-lifecycle';

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
      onGoToInvoice: id => dispatch(InvoiceActions.goToInvoice(id)),
      onDeleteInvoice: id => dispatch(InvoiceActions.deleteInvoice(id)),
      onCreateInvoice: id => dispatch(InvoiceActions.createInvoice(id)),
      fetchInvoices: () => dispatch(InvoiceActions.fetchInvoices()),
    }),
  ),
  lifecycle({
    componentDidMount({ fetchInvoices }) {
      fetchInvoices();
    },
  }),
)(InvoiceList);

export default InvoicesListContainer;
