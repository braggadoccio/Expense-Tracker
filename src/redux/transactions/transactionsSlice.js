import { createSlice } from "@reduxjs/toolkit";
// prettier-ignore
import { fetchTransactions, addTransactions, deleteTransactions, editTransactions } from "./transactionsOperations";
import moment from "moment";

const transactionsState = {
  date: moment().format("DD.MM.YYYY"),
  time: moment().format("00:00:00"),
  transactionsList: [],
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: transactionsState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    setTime(state, action) {
      state.time = action.payload;
    },
    setTransactionsList(state, action) {
      state.transactionsList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactionsList = action.payload;
      })
      .addCase(addTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTransactions.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.error.message;
      })
      .addCase(deleteTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactionsList = state.transactionsList.filtered(
          (transactionsList) => transactionsList.id !== action.payload.id
        );
      })
      .addCase(editTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(editTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactionsList = state.transactionsList.filtered(
          (transactionsList) => transactionsList.id !== action.payload.id
        );
      });
  },
});

export const { setDate, setTime, setTransactionsList } =
  transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import moment from "moment";

// const transactionsState = {
//   date: moment().format("DD.MM.YYYY"),
//   transactionsList: [],
// };

// const transactionsSlice = createSlice({
//   name: "transactions",
//   initialState: transactionsState,
//   reducers: {
//     setDate(state, action) {
//       state.date = action.payload;
//     },
//     setTransactions(state, action) {
//       state.transactionsList = action.payload;
//     },
//   },
// });

// export const { setDate, setTransactions } = transactionsSlice.actions;
// export const transactionsReducer = transactionsSlice.reducer;
