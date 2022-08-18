import { createSlice } from "@reduxjs/toolkit"

export const incomeSlice = createSlice({
  name: "income",
  initialState: { value: localStorage.getItem("income") || 0 },
  reducers: {
    incomeReducer: (state, action) => {
      state.value = action.payload
    },
    addIncome: (state, action) => {
      state.value = Number.parseInt(state.value + action.payload)
      localStorage.setItem("income", state.value)
    },
  },
})

export const { addIncome } = incomeSlice.actions

export default incomeSlice.reducer
