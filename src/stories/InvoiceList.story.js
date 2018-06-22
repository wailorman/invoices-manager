import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { store } from '../store/store';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

import { InvoiceList } from '../components/InvoiceList';

const invoices = [
  {
    id: 'SKG-01',
    title: 'Test name',
    body: `Lorem
           ipsum`,
  },
  {
    id: 'SKG-02',
    title: 'Another ticket',
    body: `Lorem
           ipsum`,
  },
];

storiesOf('InvoiceList', module).add('basic', () => (
  <Provider store={store}>
    <InvoiceList
      invoices={invoices}
      onGoToInvoice={action('onGoToInvoice')}
      onDeleteInvoice={action('onDeleteInvoice')}
      onCreateInvoice={action('onCreateInvoice')}
    />
  </Provider>
));
