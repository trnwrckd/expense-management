import { createSlice } from "@reduxjs/toolkit"

export const incomeSlice = createSlice({
  name: "income",
  initialState: { value: 0 },
  reducers: {
    incomeReducer: (state, action) => {
      state.value = action.payload
    },
  },
})

export default incomeSlice.reducer
