import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/filterSelector";

export const selectTransactions = (state) =>
  state.transactions.transactionsList;
export const setDate = (state) => state.transactions.date;
export const setTime = (state) => state.transactions.time;
export const selectError = (state) => state.transactions.error;
export const selectIsLoading = (state) => state.transactions.selectIsLoading;

export const selectFilteredTransactions = createSelector(
  [
    selectTransactions,
    setDate,
    setTime,
    selectError,
    selectIsLoading,
    selectFilter,
  ],
  (transactions, filter) => {
    return transactions.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// export const addTransactions = (state) => state.transactions.isLoggedIn;

// export const fetchTransactions = (state) => state.transactions.user;

// export const deleteTransactions = (state) => state.transactions.isRefreshing;

// export const editTransactions = (state) => state.transactions.editTransactions;
