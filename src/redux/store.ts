import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import rootReducer, { RootState } from './rootReducer';

const store = configureStore({ reducer: rootReducer });

export default store;
export type AppDispatch = typeof store.dispatch;
export const useStoreDispatch = (): ThunkDispatch<
  RootState,
  unknown,
  AnyAction
> => useDispatch<AppDispatch>();
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
