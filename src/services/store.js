import {configureStore} from "@reduxjs/toolkit";
import accountReducer from "../features/Account/accountSlice"
export const store = configureStore({
    reducer: {
        account: accountReducer,
    },
});