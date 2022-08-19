import { createSlice } from "@reduxjs/toolkit"

export const filteredListSlice = createSlice({
  name: "filtered",
  initialState: { value: JSON.parse(localStorage.getItem("filtered")) || [] },
  reducers: {
    filterReducer: (state, action) => {
      state.value = action.payload
    },
    filterList: (state, action) => {
      state.value = action.payload
      localStorage.setItem("filtered", JSON.stringify(state.value))
    },
  },
})

export const { filterList } = filteredListSlice.actions

export default filteredListSlice.reducer
