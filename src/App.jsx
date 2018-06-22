/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import 'antd/dist/antd.css';

import { store, history } from './store/store';
import { AuthContainer } from './containers/AuthContainer';
import './App.css';

import { RequireAuth } from './utils/RequireAuth';

const Test = () => (
  <div>
PROTECTED
  </div>
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/invoices" />} />
            <Route exact path="/auth" component={AuthContainer} />
            <Route exact path="/invoices" component={RequireAuth(Test)} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
