import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Form, Button, Icon,
} from 'antd';
import compose from 'compose-function';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-antd';

const PageWrapper = styled.div`
  min-width: 100wh;
  min-height: 100vh;
`;

const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  background-color: #f7f7f7;
  padding: 20px 30px;
  border-radius: 5px;

  & .ant-form :last-child {
    margin-bottom: 0;
  }
`;

const FullWitdthButton = styled(Button)`
  width: 100%;
`;

export const Auth = compose(Form.create())((props) => {
  const {
    onAuth,
  } = props;

  return (
    <PageWrapper>
      <FormWrapper>
        <AuthForm onSubmit={onAuth} />
      </FormWrapper>
    </PageWrapper>
  );
});

Auth.propTypes = {
  onAuth: PropTypes.func.isRequired,
};

export const AuthForm = reduxForm({ form: 'auth' })(({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Item>
      <Field
        name="login"
        placeholder="Login"
        hasFeedback={false}
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        component={TextField}
      />
    </Form.Item>
    <Form.Item>
      <Field
        name="password"
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        type="password"
        placeholder="Password"
        hasFeedback={false}
        component={TextField}
      />
    </Form.Item>
    <Form.Item>
      <FullWitdthButton type="primary" htmlType="submit">
        Log in
      </FullWitdthButton>
    </Form.Item>
  </Form>
));

export default Auth;
