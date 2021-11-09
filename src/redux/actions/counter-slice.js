import {createSlice,PayloadAction} from '@reduxjs/toolkit'

 const initialState = 0

 const counterSlice = createSlice({
     name:"counter",
     initialState,
     reducers:{
         increment:(state)=>{
             state.value ++
         }
     }
 })
export const {incremented} = counterSlice.actions;
export default counterSlice.reducer