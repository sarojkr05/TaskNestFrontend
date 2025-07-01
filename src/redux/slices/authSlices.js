import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstace from "../../helpers/axiosInstance.js";
import { toast } from "react-toastify";

const storedData = localStorage.getItem("data");
const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
    data: storedData && storedData !== "undefined" ? JSON.parse(storedData) : {},
}


export const createAccount = createAsyncThunk("signup", async (data)=> {
    console.log("incoming data tot the thunk", data)
    try {
        const response = await axiosInstace.post("/users", data)
        console.log("res from back", response)
        if(response.data.success) {
            toast.success(response.data.message)
        }else {
            toast.error(response.data.message)
        }
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const login = createAsyncThunk("auth/login", async (data)=> {
    console.log("incoming data tot the thunk", data)
    try {
        const response = await axiosInstace.post("/auth/login", data)
        console.log("res from back", response)
        if(response.data.success) {
            toast.success(response.data.message)
        }else {
            toast.error(response.data.message)
        }
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const logout = createAsyncThunk("auth/logout", async ()=> {
    try {
        const response = await axiosInstace.post("/auth/logout")
        if(response.data.success) {
            toast.success(response.data.message)
        }else {
            toast.error(response.data.message)
        }
        return response.data
    } catch (error) {
        console.log(error)
    }
})

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: (builer) => {
        builer.addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = true
            state.data = action?.payload.userData;
            
            localStorage.setItem('isLoggedIn', true),
            localStorage.setItem('data', JSON.stringify(action?.payload?.userData))
        })
        .addCase(logout.fulfilled, (state) => {
            state.isLoggedIn = false
            state.data = {}
            
            localStorage.setItem('isLoggedIn', false),
            localStorage.setItem('data', JSON.stringify({}))
        })
    }
})

export default authSlice.reducer;
