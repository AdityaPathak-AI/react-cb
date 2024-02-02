import {createSlice} from '@reduxjs/toolkit'
const slice = createSlice({ 
    name : "stds",
    initialState : {
        value:['']
    },
    reducers:{
        addUserName : (state,action) => {
            var data = action.payload;
            state.value =  [...state.value , data];
        },
        removeUserName : (state,action) => {
            var data = action.payload;
            state.value = state.value.filter(name=> name !=data)
        },
    }
})
export const {addUserName , removeUserName} = slice.actions
export default slice.reducer;