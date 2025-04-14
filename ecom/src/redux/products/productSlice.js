'use client'
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    loading:false,
    data:[],
    error:'',    
}
const  fetchProduct=createAsyncThunk('product/fetchProduct',()=>{
    
   return axios.get('https://dummyjson.com/products?limit=100').then(response=>response.data.products)

})
const productSlice=createSlice({
    name:'product',
    initialState,
    
   extraReducers:(builder)=>{
    builder.addCase(fetchProduct.pending,(state,action)=>{       
        state.loading=true
    })
    builder.addCase(fetchProduct.fulfilled,(state,action)=>{
       
        state.loading=false;
        state.data=action.payload
    })
    builder.addCase(fetchProduct.rejected,(state,action)=>{
        
        state.loading=false,
        state.error=action.payload
    })
   }
})
const productAction=productSlice.actions

export {fetchProduct,productAction}
export default productSlice.reducer