/* eslint-disable import/prefer-default-export */

import omit from 'lodash/omit';

const STORAGE_KEY = 'invoices';

export const fetchAllInvoices = async () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

export const pushAllInvoices = async (invoices) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));
};

export const fetchOneInvoice = async (id) => {
  const invoices = await fetchAllInvoices();
  return invoices[id];
};

export const pushOneInvoice = async (data) => {
  const { id } = data;
  const oldInvoices = await fetchAllInvoices();
  const newInvoices = { ...oldInvoices, [id]: data };
  await pushAllInvoices(newInvoices);
};

export const deleteInvoice = async (id) => {
  const oldInvoices = await fetchAllInvoices();
  const newInvoices = omit(oldInvoices, id);
  await pushAllInvoices(newInvoices);
};
