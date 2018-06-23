import { connect } from 'react-redux';
import compose from 'compose-function';
import lifecycle from 'react-pure-lifecycle';
import { push } from 'connected-react-router';

import { Auth } from '../components/Auth';

import * as AuthActions from '../actions/auth-actions';
import * as AuthSelectors from '../selectors/auth-selectors';

export const AuthContainer = compose(
  connect(
    state => ({
      isAuthenticated: AuthSelectors.isAuthenticatedSelector(state),
      loading: AuthSelectors.isLoading(state),
    }),
    dispatch => ({
      onAuth: ({ login, password }) => dispatch(AuthActions.auth({ login, password })),
      redirect: () => dispatch(push('/')),
      fetchCredentials: () => dispatch(AuthActions.fetchCredentials()),
    }),
  ),
  lifecycle({
    componentDidMount({ fetchCredentials, isAuthenticated, redirect }) {
      if (isAuthenticated) {
        redirect();
      } else {
        fetchCredentials();
      }
    },
    componentDidUpdate({ isAuthenticated, redirect }) {
      if (isAuthenticated) {
        redirect();
      }
    },
  }),
)(Auth);

export default AuthContainer;
