// dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAddAccount = createAsyncThunk("account/fetchAddAccount", async (body) => {
   try {
       const response = await axios.post("http://localhost:8080/api/account/", body);
       console.log("response", response)
       return response.data;
   } catch (err) {
       if (!err.response) {
           throw err;
       }
   }
});
export const fetchAllAccount = createAsyncThunk(
    'account/fetchAllAccount',
    async (body) => {
        try {
            const response = await axios.get("http://localhost:8080/api/account/");
            console.log("response", response);
            return response.data; // Use response.data to access the response body
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            // If there's a response, you can handle the error accordingly
            throw new Error('Error fetching data: ' + err.response.data.message);
        }
    }
);
const accountSlice = createSlice({
    name: "account",
    initialState: {
        data: [],
        accounts:[],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddAccount.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAddAccount.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchAddAccount.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
        builder
            .addCase(fetchAllAccount.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllAccount.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.accounts = action.payload;
            })
            .addCase(fetchAllAccount.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
export const selectAllAccount = (state) =>
    state.account.accounts;
export default accountSlice.reducer;
