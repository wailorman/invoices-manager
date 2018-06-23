import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Redux from './Redux-decorator';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

import { Auth } from '../components/Auth';

storiesOf('Auth', module)
  .addDecorator(Redux)
  .add('basic', () => <Auth onAuth={action('onAuth')} />)
  .add('loading', () => <Auth loading />);
