import { connect } from 'react-redux';
import compose from 'compose-function';
import lifecycle from 'react-pure-lifecycle';
import { push } from 'connected-react-router';

import { InvoiceEdit } from '../components/InvoiceEdit';

import * as InvoiceSelectors from '../selectors/invoices-selector';
import * as InvoiceActions from '../actions/invoices-actions';

export const InvoiceEditContainer = compose(
  connect(
    (state, ownProps) => {
      const { id } = ownProps.match.params;
      const res = {
        invoice: InvoiceSelectors.oneInvoiceSelector(id)(state),
        loading: InvoiceSelectors.loadingInvoicesSelector(state),
      };
      // debugger;
      return res;
    },
    (dispatch, ownProps) => {
      const { id } = ownProps.match.params;
      return {
        fetchOneInvoice: () => dispatch(InvoiceActions.fetchOneInvoice(id)),
        onSave: values => dispatch(InvoiceActions.updateInvoice(id, values)),
        onDelete: () => {
          dispatch(InvoiceActions.deleteInvoice(id));
          dispatch(push('/invoices'));
        },
      };
    },
  ),
  lifecycle({
    componentDidMount({ fetchOneInvoice }) {
      fetchOneInvoice();
    },
  }),
)(InvoiceEdit);

export default InvoiceEditContainer;
