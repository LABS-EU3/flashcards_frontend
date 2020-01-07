// Import

// Libraries
import { Redirect } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import decode from 'jwt-decode';

// Configs
import { baseUrl } from '../config';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
    baseURL: baseUrl,
  });
};

export const isTokenExpired = token => {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const clearLocalStorage = () => {
  localStorage.removeItem('token');
};

export const getToken = () => {
  try {
    const token = localStorage.getItem('token');
    if (token === null) {
      return undefined;
    }
    const isExpired = isTokenExpired(token);
    if (isExpired) {
      clearLocalStorage();
      return undefined;
    }
    return JSON.parse(token);
  } catch (error) {
    return undefined;
  }
};

export const decodeToken = () => {
  const token = getToken();
  const info = token ? decode(token) : null;
  return info;
};

export function WithAuthCheck(Component, props) {
  if (decodeToken()) {
    return <Component {...props} />;
  }
  return <Redirect to="/login" />;
}
