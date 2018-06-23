import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { Layout, Menu } from 'antd';

import { InvoicesListContainer } from './InvoicesListContainer';

const StyledContent = styled(Layout.Content)`
  margin: 40px;
  padding: 20px 30px;
  background: white;
  min-height: 100vh;
`;

export const ContentContainer = () => (
  <Layout>
    <Layout.Header>
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
        <Menu.Item key="1">Invoices</Menu.Item>
      </Menu>
    </Layout.Header>
    <StyledContent>
      <Switch>
        <Route exact path="/invoices" render={() => <InvoicesListContainer />} />
        {/* <Route exact path="/invoices/:id" render={() => <span>2</span>} /> */}
      </Switch>
    </StyledContent>
  </Layout>
);

export default ContentContainer;
