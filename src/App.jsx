/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import 'antd/dist/antd.css';

import { store, history } from './store/store';
import { AuthContainer } from './containers/AuthContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route exact path="/auth" component={AuthContainer} />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
