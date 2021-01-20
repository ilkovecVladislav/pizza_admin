import axios, { AxiosRequestConfig } from 'axios';

import handleError from './errors';

const AUTH_HEADER_NAME = 'Authorization';

let token: string | null = null;

const protectedAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

protectedAPI.interceptors.request.use(
  (requestConfig: AxiosRequestConfig) => {
    if (!token) {
      return requestConfig;
    }

    const newConfig = {
      headers: {},
      ...requestConfig,
    };

    newConfig.headers[AUTH_HEADER_NAME] = `Bearer ${token}`;

    return newConfig;
  },
  (error) => Promise.reject(error),
);

const protectedGet = <T>(url: string, params = {}, options = {}): Promise<T> =>
  protectedAPI
    .get<T>(url, {
      params,
      ...options,
    })
    .catch(handleError)
    .then((res) => res.data);

const protectedPost = <T, R>(url: string, data: T, params = {}, options = {}): Promise<R> =>
  protectedAPI
    .post<R>(url, data, { params, ...options })
    .catch(handleError)
    .then((res) => res.data);

const protectedPut = <T, R>(url: string, data: T, params = {}, options = {}): Promise<R> =>
  protectedAPI
    .put<R>(url, data, { params, ...options })
    .catch(handleError)
    .then((res) => res.data);

const protectedDelete = <T>(url: string): Promise<T> =>
  protectedAPI
    .delete<T>(url)
    .catch(handleError)
    .then((res) => res.data);

const setToken = ({ token: newToken }: { token: string }): void => {
  token = newToken;
};

export { protectedGet, protectedPost, protectedPut, protectedDelete, setToken };
