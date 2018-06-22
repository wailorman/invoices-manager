import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { store } from '../store/store';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

import { Auth } from '../components/Auth';

storiesOf('Auth', module).add('basic', () => (
  <Provider store={store}>
    <Auth onAuth={action('onAuth')} />
  </Provider>
));
