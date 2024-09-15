import { createSlice } from "@reduxjs/toolkit";

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    items: [],
  },
  reducers: {
    addToFavourites: (state, action) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
      }
    },
    removeFromFavourites: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
  selectors: {
    selectIsInFavourites: (state, itemId) => {
      return state.items.includes(itemId);
    },
  },
});

export const { selectIsInFavourites } = favouritesSlice.selectors;

export const { addToFavourites, removeFromFavourites } =
  favouritesSlice.actions;

export default favouritesSlice.reducer;
