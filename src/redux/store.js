import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/slices/authSlices"

const store = configureStore({
    reducer: {
        // you slices will be here
        auth: authSlice,
        // task: taskSlice
    },
    devTools: true
})

export default store;
