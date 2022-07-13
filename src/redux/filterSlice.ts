import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { sorts, companies, transfersData } from "../data/dummy";
import { checkboxesData } from "../data/types";

export interface Filters {
  sortType: string;
  company: string;
  transfers: {
    [prop: string]: {
      value: boolean;
      label: string;
      num: number;
    };
  };
}

const initialState: Filters = {
  sortType: Object.keys(sorts)[0],
  company: Object.keys(companies)[0],
  transfers: transfersData,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSortType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
    setCompany: (state, action: PayloadAction<string>) => {
      state.company = action.payload;
    },
    setTransfers: (state, action: PayloadAction<checkboxesData>) => {
      state.transfers = {
        ...state.transfers,
        ...action.payload,
      };
    },
  },
});

export const { setSortType, setCompany, setTransfers } = filtersSlice.actions;

export default filtersSlice.reducer;
