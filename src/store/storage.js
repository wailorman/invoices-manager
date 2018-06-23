/* eslint-disable import/prefer-default-export */

import omit from 'lodash/omit';

const INVOICES_STORAGE_KEY = 'INVOICES_MANAGER_invoices';
const CREDENTIALS_STORAGE_KEY = 'INVOICES_MANAGER_credentials';

export const fetchAllInvoices = async () =>
  JSON.parse(localStorage.getItem(INVOICES_STORAGE_KEY)) || {};

export const pushAllInvoices = async (invoices) => {
  localStorage.setItem(INVOICES_STORAGE_KEY, JSON.stringify(invoices));
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

export const fetchCredentials = async () =>
  JSON.parse(localStorage.getItem(CREDENTIALS_STORAGE_KEY)) || {};

export const pushCredentials = async (invoices) => {
  localStorage.setItem(CREDENTIALS_STORAGE_KEY, JSON.stringify(invoices));
};

export const logIn = async (login, password) => {
  if (login === 'root' && password === '123') {
    await pushCredentials({ loggedIn: true });
    return true;
  }

  return false;
};

export const logOut = async () => {
  await pushCredentials({ loggedIn: false });
};

export const isLoggedIn = async () => {
  const credentials = await fetchCredentials();

  if (credentials && credentials.loggedIn) {
    return true;
  }

  return false;
};
