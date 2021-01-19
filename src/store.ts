import { configureStore, combineReducers } from '@reduxjs/toolkit';

import userReducer from 'pages/LogInPage/state/reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
