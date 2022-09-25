import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Login from '../pages/modal/Login';
import Register from '../pages/modal/Register';

const initialState = {
    isModalOpen: false,
    currentModal: ''
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) =>  {
        state.isModalOpen = true;
        state.currentModal = action.payload;
    },
    closeModal: (state) => {
        state.isModalOpen = false;
        state.currentModal = '';
    }
  }
});
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;