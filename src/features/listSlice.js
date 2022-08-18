import { createSlice } from "@reduxjs/toolkit"

export const listSlice = createSlice({
  name: "list",
  initialState: { value: [] },
  reducers: {
    listReducer: (state, action) => {
      state.value = action.payload
    },
  },
})

export default listSlice.reducer
