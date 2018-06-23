import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  font-size: 2.5em;
  height: 2.5em;
  max-width: 200px;
  margin: 0 auto;
  text-align: center;
`;

export const Loading = ({ disabled }) => (
  <LoadingWrapper>{!disabled && <Icon type="loading" />}</LoadingWrapper>
);

Loading.propTypes = {
  disabled: PropTypes.bool,
};

Loading.defaultProps = {
  disabled: false,
};

export default Loading;
