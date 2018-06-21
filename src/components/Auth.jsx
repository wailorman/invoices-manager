import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Input, Button, Icon } from 'antd';
import compose from 'compose-function';

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
    form,
    form: { getFieldDecorator },
    onAuth,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    form.validateFields((err, values) => {
      if (err) return;

      onAuth(values);
    });
  };

  return (
    <PageWrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('login')(<Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Login"
            />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password')(<Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />)}
          </Form.Item>
          <Form.Item>
            <FullWitdthButton type="primary" htmlType="submit">
              Log in
            </FullWitdthButton>
          </Form.Item>
        </Form>
      </FormWrapper>
    </PageWrapper>
  );
});

Auth.propTypes = {
  onAuth: PropTypes.func.isRequired,
};

export default Auth;
