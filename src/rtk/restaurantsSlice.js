import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    restaurants: []
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setRestaurants: (state, action) =>  {
        state.restaurants = action.payload;
    }
  }
});
export const { setRestaurants } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;