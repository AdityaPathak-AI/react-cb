import {createSlice} from "@reduxjs/toolkit";
const slice = createSlice({
    name: 'mycart',
    initialState:{
        value:[]
    },
    reducers:{
        addItem:(state,action)=>{
            var pdata = action.payload;
            state.value= [...state.value,{pdata,qty:1}]
    },
        removeItem:(state,action)=>{
            var id = action.payload;
            state.value = state.value.filter(obj=>obj.pdata.id != id);
        
    },
        incrementQTy:(state,action)=>{
            var id = action.payload;
            state.value = state.value.map(obj=>obj.pdata.id == id ? {...obj,qty:obj.qty+1}:obj);
        
    },
        decrementQty:(state,action)=>{
            var id = action.payload;
            state.value = state.value.map(obj=>obj.pdata.id == id ? {...obj , qty:obj.qty-1}:obj)
    }
}
})
export const {addItem , removeItem , incrementQTy , decrementQty} = slice.actions
export default slice.reducer;