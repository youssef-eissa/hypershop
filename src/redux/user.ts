import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name: "user",
    initialState: { user: {}},
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        resetUser: (state) => {
            state.user = {};
        }
    }
})
export const { setUser,resetUser } = userSlice.actions;
export const userSlicer = userSlice.reducer