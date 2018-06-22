import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';
import styled from 'styled-components';

export const ButtonsBar = styled.div`
  margin-bottom: 10px;
`;

export const InvoiceList = (props) => {
  const {
    invoices, onGoToInvoice, onDeleteInvoice, onCreateInvoice,
  } = props;

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: id => <a onClick={() => onGoToInvoice(id)}>{id}</a>,
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
      <Table columns={columns} dataSource={invoices} />
    </div>
  );
};

InvoiceList.propTypes = {
  invoices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  onGoToInvoice: PropTypes.func.isRequired,
  onDeleteInvoice: PropTypes.func.isRequired,
  onCreateInvoice: PropTypes.func.isRequired,
};

InvoiceList.defaultProps = {
  invoices: [],
};

export default InvoiceList;
