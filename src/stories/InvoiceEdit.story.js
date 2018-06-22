import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { store } from '../store/store';
// import { linkTo } from '@storybook/addon-links';

import { InvoiceEdit } from '../components/InvoiceEdit';

storiesOf('InvoiceEdit', module).add('basic', () => (
  <Provider store={store}>
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
  </Provider>
));
