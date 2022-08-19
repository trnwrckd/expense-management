import { createSlice } from "@reduxjs/toolkit"

export const expenseSlice = createSlice({
  name: "expense",
  initialState: { value: localStorage.getItem("expense") || 0 },
  reducers: {
    incomeReducer: (state, action) => {
      state.value = action.payload
    },
    addExpense: (state, action) => {
      state.value = Number.parseInt(state.value) + Number.parseInt(action.payload)
      localStorage.setItem("expense", state.value)
    },
  },
})

export const { addExpense } = expenseSlice.actions

export default expenseSlice.reducer
