import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export default story => <Provider store={store}>{story()}</Provider>;
