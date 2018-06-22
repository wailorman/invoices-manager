import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Redux from './Redux-decorator';

import { InvoiceList } from '../components/InvoiceList';

const invoices = [
  {
    id: 'SKG-01',
    title: 'Test name',
    status: 'In progress',
    body: `Lorem
           ipsum`,
  },
  {
    id: 'SKG-02',
    title: 'Another ticket',
    status: 'Done',
    body: `Lorem
           ipsum`,
  },
];

storiesOf('InvoiceList', module)
  .addDecorator(Redux)
  .add('basic', () => (
    <InvoiceList
      invoices={invoices}
      onGoToInvoice={action('onGoToInvoice')}
      onDeleteInvoice={action('onDeleteInvoice')}
      onCreateInvoice={action('onCreateInvoice')}
    />
  ))
  .add('loading', () => <InvoiceList loading />);
