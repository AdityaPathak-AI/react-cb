import {createSlice} from '@reduxjs/toolkit'
const slice = createSlice({
    name : "stds",
    initialState : {
        value:['Alphonso' , 'Antonie' , 'Karl Marx' , 'Adolf Hitler' , 'Stalin']
    }
})
export default slice.reducer