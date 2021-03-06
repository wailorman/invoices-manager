import { createSelector } from 'reselect';

export const authSelector = state => state.auth;
export const isAuthenticatedSelector = createSelector(authSelector, auth => auth.loggedIn);
export const isLoading = createSelector(authSelector, auth => auth.loading);
