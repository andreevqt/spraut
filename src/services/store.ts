import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
  store,
};
