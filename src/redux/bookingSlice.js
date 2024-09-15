import { createSlice } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    items: [],
  },
  reducers: {
    setBooking: (state, action) => {
      console.log(action.payload);
      state.items = [...state.items, { ...action.payload }];
    },
  },
  selectors: {
    selectBookedDates: (state, productId) => {
      const itemBookings = state.items.filter(
        (item) => Number.parseInt(item.product) === Number.parseInt(productId)
      );

      return itemBookings.map((booking) =>
        booking.bookingDate instanceof Date
          ? booking.bookingDate
          : new Date(booking.bookingDate)
      );
    },
  },
});

export const { selectBookedDates } = bookingSlice.selectors;

export const { setBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
