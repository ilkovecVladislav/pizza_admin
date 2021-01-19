import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppRouter from 'routers';
import store from 'store';
import './index.css';

const queryClient = new QueryClient({});

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
