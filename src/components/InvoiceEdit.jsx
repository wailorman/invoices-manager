import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Icon } from 'antd';
import { TextField, SelectField } from 'redux-form-antd';
import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';

import { statuses as Statuses } from '../constants/statuses';
import { TextAreaField } from './TextAreaField';

const StyledForm = styled(Form)`
  max-width: 720px;
  margin: 0 auto;
`;

const StyledFormItem = styled(Form.Item)`
  margin-bottom: 7px;
`;

const LoadingWrapper = styled.div`
  font-size: 1.7em;
  max-width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const Loading = () => (
  <LoadingWrapper>
    <Icon type="loading" />
    <br />
    Loading...
  </LoadingWrapper>
);

export const InvoiceEdit = ({
  invoice, loading, onSave, onDelete,
}) =>
  (loading ? (
    <Loading />
  ) : (
    <InvoiceForm initialValues={invoice} onSubmit={onSave} onDelete={onDelete} />
  ));

InvoiceEdit.propTypes = {
  invoice: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
    status: PropTypes.string,
  }),
  loading: PropTypes.bool,
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
};

InvoiceEdit.defaultProps = {
  invoice: {
    id: '',
    title: '',
    body: '',
    status: Statuses.PENDING,
  },
  loading: false,
  onSave: () => {},
  onDelete: () => {},
};

export const InvoiceForm = reduxForm({ form: 'invoice-form' }, (state, ownProps) => ({
  initialValues: {
    ...ownProps.invoice,
  },
}))((props) => {
  const { handleSubmit, onDelete } = props;

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  const submitItemLayout = {
    wrapperCol: { span: 20, offset: 4 },
  };

  const statuses = Object.values(Statuses).map(statusName => ({
    label: statusName,
    value: statusName,
  }));

  return (
    <StyledForm>
      <StyledFormItem {...formItemLayout} label="ID">
        <Field name="id" component={TextField} disabled hasFeedback={false} />
      </StyledFormItem>
      <StyledFormItem {...formItemLayout} label="Title">
        <Field name="title" component={TextField} hasFeedback={false} />
      </StyledFormItem>
      <StyledFormItem {...formItemLayout} label="Body">
        <Field name="body" rows={2} component={TextAreaField} hasFeedback={false} />
      </StyledFormItem>
      <StyledFormItem {...formItemLayout} label="Status">
        <Field name="status" component={SelectField} options={statuses} hasFeedback={false} />
      </StyledFormItem>
      <StyledFormItem {...submitItemLayout}>
        <Button type="primary" icon="save" onClick={handleSubmit}>
          Save
        </Button>
        <Button type="danger" icon="delete" onClick={onDelete} style={{ float: 'right' }}>
          Delete
        </Button>
      </StyledFormItem>
    </StyledForm>
  );
});

export default InvoiceEdit;
