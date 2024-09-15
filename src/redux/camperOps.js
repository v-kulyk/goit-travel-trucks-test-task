import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "catalog/fetchCampers",
  async ({ limit, page, filter }) => {
    const requestFilter = filter ? { ...filter } : {};

    if (requestFilter.automatic) {
      requestFilter.transmission = "automatic";
    }

    const response = await axios.get("/campers", {
      params: {
        limit: limit || 4,
        page: page || 1,
        ...requestFilter,
      },
    });
    return response.data;
  }
);

export const fetchOneCamper = createAsyncThunk(
  "catalog/fetchOneCamper",
  async (id) => {
    const response = await axios.get(`/campers/${id}`);
    return response.data;
  }
);
