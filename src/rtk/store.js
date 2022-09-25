import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import modalReducer from './modalSlice';

const rootReducer = combineReducers({
  modal: modalReducer
});

export const store = configureStore({
  reducer: rootReducer
});
