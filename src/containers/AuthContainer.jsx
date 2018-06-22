// import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Auth } from '../components/Auth';

import { auth } from '../actions/auth-actions';

export const AuthContainer = connect(
  null,
  dispatch => ({
    onAuth: ({ login, password }) => dispatch(auth({ login, password })),
  }),
)(Auth);

export default AuthContainer;
