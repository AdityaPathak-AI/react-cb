import {createSlice} from "@reduxjs/toolkit";
const slice = createSlice({
    name: 'mycart',
    initialState:{
        value:[]
    },
    reducers:{
        addItem:(state,action)=>{
            var data = action.payload;
            state.value= [...state.value,data]
    },
        removeItem:(state,action)=>{
        
    },
        incrementQTy:(state,action)=>{
        
    },
        decrementQty:(state,action)=>{
    }
}
})
export const {addItem , removeItem , incrementQTy , decrementQty} = slice.actions
export default slice.reducer;