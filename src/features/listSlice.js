import { createSlice } from "@reduxjs/toolkit"

export const listSlice = createSlice({
  name: "list",
  initialState: { value: JSON.parse(localStorage.getItem("list")) || [] },
  reducers: {
    listReducer: (state, action) => {
      state.value = action.payload
    },
    addItem: (state, action) => {
      state.value.push(action.payload)
      localStorage.setItem("list", JSON.stringify(state.value))
    },
  },
})

export const { addItem } = listSlice.actions

export default listSlice.reducer
