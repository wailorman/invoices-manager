import { createSelector } from 'reselect';

export const invoicesSelector = state => state.invoices;

export const invoicesListSelector = createSelector(invoicesSelector, invoices => invoices.list);
export const invoicesObjectsSelector = createSelector(
  invoicesSelector,
  invoices => invoices.objects,
);

export const allInvoicesSelector = createSelector(
  invoicesListSelector,
  invoicesObjectsSelector,
  (list, objects) => list.map(id => objects[id]),
);

export const oneInvoiceSelector = id =>
  createSelector(invoicesObjectsSelector, objects => objects[id]);

export const loadingInvoicesSelector = createSelector(
  invoicesSelector,
  invoices => invoices.loading,
);

export const lastInvoiceIdSelector = createSelector(invoicesSelector, invoices => invoices.lastId);
