import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://expense-tracker.b.goit.study/api-docs/";

export const addTransactions = createAsyncThunk(
  "transactions/addTransactions",
  async ({ transactionType, date, time, category, sum, comment }, thunkAPI) => {
    try {
      const response = await axios.post("/transactions", {
        transactionType,
        date,
        time,
        category,
        sum,
        comment,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransaction",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/transactions${transactionType}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactions = createAsyncThunk(
  "transactions/deleteTransactions",
  async (transactionType, thunkAPI) => {
    try {
      const response = await axios.delete(`/transactions/${transactionType}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTransactions = createAsyncThunk(
  "transactions/editTransactions",
  async (transactionType, id, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/transactions/${transactionType}/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const setSelectedDate = createAsyncThunk(
//   "transactions/setSelectedDate",
//   async (date, id, thunkAPI) => {
//     try {
//       const response = await axios.patch(`/transactions/${date}/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const setSelectedTime = createAsyncThunk(
//   "transactions/setSelectedTime",
//   async (time, id, thunkAPI) => {
//     try {
//       const response = await axios.patch(`/transactions/${time}/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
