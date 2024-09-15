import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalogSlice";
import productReducer from "./productSlice";
import favouritesReducer from "./favouritesSlice";
import bookingReducer from "./bookingSlice";

import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistedFavouritesReducer = persistReducer(
  {
    key: "favourites",
    storage,
  },
  favouritesReducer
);

const persistedBookingsReducer = persistReducer(
  {
    key: "booking",
    storage,
  },
  bookingReducer
);

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    product: productReducer,
    favourites: persistedFavouritesReducer,
    booking: persistedBookingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
