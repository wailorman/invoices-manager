import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import { isAuthenticatedSelector } from '../selectors/auth-selectors';

export const RequireAuth = connectedRouterRedirect({
  redirectPath: '/auth',
  authenticatedSelector: isAuthenticatedSelector,
});

export default RequireAuth;
