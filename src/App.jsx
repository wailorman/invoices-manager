/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import 'antd/dist/antd.css';

import { store, history } from './store/store';
import { AuthContainer } from './containers/AuthContainer';
import { ContentContainer } from './containers/ContentContainer';
import './App.css';

import { RequireAuth } from './utils/RequireAuth';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/invoices" />} />
            <Route exact path="/auth" component={AuthContainer} />
            {/* <Route path="/invoices" component={RequireAuth(ContentContainer)} /> */}
            <Route path="/invoices" component={ContentContainer} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
