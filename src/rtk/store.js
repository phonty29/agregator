import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import modalReducer from './modalSlice';
import restaurantsReducer from './restaurantsSlice';

const rootReducer = combineReducers({
  modal: modalReducer,
  restaurants: restaurantsReducer
});

export const store = configureStore({
  reducer: rootReducer
});
