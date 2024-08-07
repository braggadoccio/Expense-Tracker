import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const dateState = {
  date: moment().format("dd.MM.yyyy"),
  // time: moment().format("00:00:00"),
};

const dateSlice = createSlice({
  name: "date",
  initialState: dateState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    // setTime(state, action) {
    //   state.time = action.payload;
    // },
  },
});

export const { setDate, setTime } = dateSlice.actions;
export const dateReducer = dateSlice.reducer;
