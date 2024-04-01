// dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAddAccount = createAsyncThunk("account/fetchAddAccount", async (body) => {
   try {
       const response = await axios.post("http://localhost:8080/api/account", body);
       return response.data;
   } catch (err) {
       if (!err.response) {
           throw err;
       }
   }
});
export const fetchAllAccount = createAsyncThunk(
    'account/fetchAllAccount',
    async ({customerId}) => {
        try {
            const response = await axios.get("http://localhost:8080/api/account/"+customerId);
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
        accounts:null,
        statusCreate: "idle",
        statusAllAccount: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddAccount.pending, (state) => {
                state.statusCreate = "loading";
            })
            .addCase(fetchAddAccount.fulfilled, (state, action) => {
                state.statusCreate = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchAddAccount.rejected, (state, action) => {
                state.statusCreate = "failed";
                state.error = action.error.message;
            });
        builder
            .addCase(fetchAllAccount.pending, (state) => {
                state.statusAllAccount = 'loading';
            })
            .addCase(fetchAllAccount.fulfilled, (state, action) => {
                state.statusAllAccount = 'succeeded';
                state.accounts = action.payload;
            })
            .addCase(fetchAllAccount.rejected, (state, action) => {
                state.statusAllAccount = 'failed';
                state.error = action.error.message;
            });
    },
});
export const selectAllAccount = (state) => state.account?.accounts;
export const selectStatusAccount = (state) => state.account?.statusCreate;
export default accountSlice.reducer;
