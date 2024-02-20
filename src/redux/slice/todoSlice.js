import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      list: [],
    },
  ],
  reducers: {
    settodoStore: (state, action) => {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
});

export const { settodoToStore } = todoSlice.actions;

export default todoSlice.reducer;
