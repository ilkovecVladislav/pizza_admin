import { AxiosError } from 'axios';

import { logOut } from 'pages/LogInPage/state/reducer';

import store from '../store';

const handleError = (error: AxiosError): never => {
  if (error?.response?.status === 401) {
    store.dispatch(logOut());
  }
  throw error;
};

export default handleError;
