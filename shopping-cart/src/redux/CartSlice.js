import {createSlice} from "@reduxjs/toolkit";
const slice = createSlice({
  name: "mycart",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      var pdata = action.payload;
      state.value = [...state.value, { pdata, qty: 1 }];
    },
    removeItem: (state, action) => {
      var id = action.payload;
      state.value = state.value.filter((obj) => obj.pdata.id != id);
    },
    incrementQTy: (state, action) => {
      var id = action.payload;
      state.value = state.value.map((obj) =>
        obj.pdata.id == id ? { ...obj, qty: obj.qty + 1 } : obj
      );
    },
    decrementQty: (state, action) => {
      var id = action.payload;
      state.value = state.value.map((obj) =>
        obj.pdata.id == id ? { ...obj, qty: obj.qty - 1 } : obj
      );
    },
    emptyQty: (state, action) => {
      var id = action.payload;
      console.log("emptying the quantity of item with ID : ", id);
      state.value = state.value.map((obj) =>
        obj.pdata.id == id ? { ...obj, qty: 0 } : obj
      );
    },
    clearData:(state,action) => {
        var data = action.payload;
        state.value=[]
    }
  },
});
export const {addItem , removeItem , incrementQTy , decrementQty , emptyQty , clearData } = slice.actions
export default slice.reducer;