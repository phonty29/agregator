import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    restaurants: [],
    searchingRestaurants: []
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setRestaurants: (state, action) =>  {
        state.restaurants = action.payload;
    },
    searchRestaurants: (state, action) => {
      state.searchingRestaurants = state.restaurants.filter( restaurant => {
        if (restaurant.title.toLowerCase().startsWith(action.payload.toLowerCase()))
          return restaurant;
      });
    }
  }
});
export const { setRestaurants, searchRestaurants } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;