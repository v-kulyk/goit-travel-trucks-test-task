import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./camperOps";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
    loading: false,
    error: null,
    filter: null,
    page: 1,
  },
  reducers: {
    setFilter: {
      reducer: (state, action) => {
        state.filter = action.payload;
        state.page = 1;
      },
      prepare: (data) => {
        const result = {};

        for (const key of Object.keys(data)) {
          let value = data[key];

          if (value === "") {
            continue;
          }

          if (value === "true") {
            value = true;
          }

          if (value === "false") {
            value = false;
          }

          result[key] = value;
        }

        return { payload: result };
      },
    },
    setIncrementPage(state) {
      state.page += 1;
    },
    resetPage(state) {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        if (state.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items.push(...action.payload.items);
        }

        state.totalItems = action.payload.total;
        state.loading = false;
      })
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.rejected, (state, { error }) => {
        state.error = error;
        state.loading = false;
      });
  },
  selectors: {
    selectLoading(state) {
      return state.loading;
    },
    selectError(state) {
      return state.error;
    },
    selectItems(state) {
      return state.items;
    },
    selectHasMoreItems(state) {
      return state.items.length < state.totalItems;
    },
    selectFilter(state) {
      return state.filter;
    },
    selectPage(state) {
      return state.page;
    },
  },
});

export const {
  selectLoading,
  selectError,
  selectFilter,
  selectItems,
  selectHasMoreItems,
  selectPage,
} = catalogSlice.selectors;

export const { setFilter, setIncrementPage, resetPage } = catalogSlice.actions;

export default catalogSlice.reducer;
