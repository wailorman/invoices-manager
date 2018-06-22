import React from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Layout, Menu } from 'antd';

import { InvoiceList } from '../components/InvoiceList';

const StyledContent = styled(Layout.Content)`
  margin: 40px;
  padding: 20px 30px;
  background: white;
  min-height: 100vh;
`;

export const ContentContainer = () => (
  <Layout>
    <Layout.Header>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Invoices</Menu.Item>
      </Menu>
    </Layout.Header>
    <StyledContent>
      <Route path="/invoices" render={() => <InvoiceList />} />
      <Route path="/invoices/2" render={() => <span>2</span>} />
    </StyledContent>
  </Layout>
);

export default ContentContainer;
