import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Redux from './Redux-decorator';
// import { linkTo } from '@storybook/addon-links';

import { InvoiceEdit } from '../components/InvoiceEdit';

storiesOf('InvoiceEdit', module)
  .addDecorator(Redux)
  .add('basic', () => (
    <InvoiceEdit
      onSave={action('onSave')}
      onDelete={action('onDelete')}
      invoice={{
        id: 'SKG-001',
        title: '123',
        body: '11\nf',
        status: 'In progress',
      }}
    />
  ))
  .add('loading', () => <InvoiceEdit loading />);
