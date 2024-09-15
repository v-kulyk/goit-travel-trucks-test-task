import { createSlice, current } from "@reduxjs/toolkit";
import { fetchOneCamper } from "./camperOps";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: null,
    loading: false,
    error: null,
    tabs: ["Features", "Reviews"],
    currentTab: "Features",
  },
  reducers: {
    setCurrentTab(state, action) {
      state.currentTab =
        state.tabs.indexOf(action.payload) !== -1
          ? action.payload
          : state.currentTab;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOneCamper.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchOneCamper.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOneCamper.rejected, (state, { error }) => {
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
    selectData(state) {
      return state.data;
    },
    selectTabs(state) {
      return state.tabs;
    },
    selectCurrentTab(state) {
      return state.currentTab;
    },
  },
});

export const {
  selectLoading,
  selectError,
  selectData,
  selectTabs,
  selectCurrentTab,
} = productSlice.selectors;

export const { setCurrentTab } = productSlice.actions;

export default productSlice.reducer;
