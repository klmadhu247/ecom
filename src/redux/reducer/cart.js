import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list:[]
    },
    reducers:{
        addItem: (state,{payload})=>{
            state.list = [...list, payload]
        }
    }
})
