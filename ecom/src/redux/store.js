'use client'
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './category/categorySlice'
import productReducer from './products/productSlice'
const store=configureStore({
    reducer:{
        category:categoryReducer,
        product:productReducer
    }
})
export default store