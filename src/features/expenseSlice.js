import { createSlice } from "@reduxjs/toolkit"

export const expenseSlice = createSlice({
  name: "expense",
  initialState: { value: 0 },
  reducers: {
    incomeReducer: (state, action) => {
      state.value = action.payload
    },
  },
})

export default expenseSlice.reducer
