import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Layout, Menu } from 'antd';

import * as AuthActions from '../actions/auth-actions';

import { InvoicesListContainer } from './InvoiceListContainer';
import { InvoiceEditContainer } from './InvoiceEditContainer';

const StyledContent = styled(Layout.Content)`
  margin: 40px;
  padding: 20px 30px;
  background: white;
  min-height: 100vh;
`;

const InvoicesManagerLogo = styled.div`
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  font-family: Menlo, Consolas, monospace;
  color: #d8ecff;
`;

const BreadcrumbsWrapper = styled.div`
  margin-bottom: 20px;
`;

const BreadcrumbsBar = () => (
  <BreadcrumbsWrapper>
    <Link to="/invoices">← Back to invoices</Link>
  </BreadcrumbsWrapper>
);

export const ContentContainer = connect(
  null,
  dispatch => ({ unauth: () => dispatch(AuthActions.unauth()) }),
)(({ unauth }) => (
  <Layout>
    <Layout.Header>
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
        <InvoicesManagerLogo>INVOICES MANAGER</InvoicesManagerLogo>
        <Menu.Item key="logout" style={{ float: 'right' }}>
          <a onClick={unauth}>Log out</a>
        </Menu.Item>
      </Menu>
    </Layout.Header>
    <StyledContent>
      <Route exact path="/invoices/:id" component={BreadcrumbsBar} />
      <Switch>
        <Route exact path="/invoices" component={InvoicesListContainer} />
        <Route exact path="/invoices/:id" component={InvoiceEditContainer} />
      </Switch>
    </StyledContent>
  </Layout>
));

export default ContentContainer;
