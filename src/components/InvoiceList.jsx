import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';
import styled from 'styled-components';

const ButtonsBar = styled.div`
  margin-bottom: 10px;
`;

const MonospacedLink = styled.a`
  font-family: Menlo, Consolas, monospace;
`;

export const InvoiceList = (props) => {
  const {
    loading, invoices, onGoToInvoice, onDeleteInvoice, onCreateInvoice,
  } = props;

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: id => <MonospacedLink onClick={() => onGoToInvoice(id)}>{id}</MonospacedLink>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '',
      dataIndex: 'actions',
      key: 'actions',
      width: 100,
      render: (__, { id }) => (
        <div>
          <a onClick={() => onDeleteInvoice(id)}>Delete</a>
        </div>
      ),
    },
  ];

  return (
    <div>
      <ButtonsBar>
        <Button icon="plus" onClick={onCreateInvoice}>
          Create
        </Button>
      </ButtonsBar>
      <Table rowKey="id" loading={loading} columns={columns} dataSource={invoices} />
    </div>
  );
};

InvoiceList.propTypes = {
  loading: PropTypes.bool,
  invoices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  onGoToInvoice: PropTypes.func,
  onDeleteInvoice: PropTypes.func,
  onCreateInvoice: PropTypes.func,
};

InvoiceList.defaultProps = {
  loading: false,
  invoices: [],
  onGoToInvoice: () => {},
  onDeleteInvoice: () => {},
  onCreateInvoice: () => {},
};

export default InvoiceList;
