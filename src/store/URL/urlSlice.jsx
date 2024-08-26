import { createSlice } from "@reduxjs/toolkit";

const initialPage = 1;
const initialPageSize = 16;
const initialSortByName = null;
const initialSortByPrice = null;

const initialState = {
  baseURL: `http://localhost:3000/sorted?page=${initialPage}&pageSize=${initialPageSize}`,
  page: initialPage,
  pageSize: initialPageSize,
  sortByName: initialSortByName,
  sortByPrice: initialSortByPrice,
};

const URLSlice = createSlice({
  name: "URL",
  initialState,
  reducers: {
    setBaseUrl: (state, action) => {
      state.baseURL = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
      state.baseURL = buildURL(state);
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
      state.baseURL = buildURL(state);
    },
    setSortByName: (state, action) => {
      state.sortByName = action.payload;
      state.baseURL = buildURL(state);
    },
    setSortByPrice: (state, action) => {
      state.sortByPrice = action.payload;
      state.baseURL = buildURL(state);
    },
  },
});

function buildURL(state) {
  let url = `http://localhost:3000/sorted?page=${state.page}&pageSize=${state.pageSize}`;

  if (state.sortByName) {
    url += `&sortByName=${state.sortByName}`;
  }

  if (state.sortByPrice) {
    url += `&sortByPrice=${state.sortByPrice}`;
  }

  return url;
}

export const { setBaseUrl, setPage, setPageSize, setSortByName, setSortByPrice } = URLSlice.actions;
export default URLSlice.reducer;
