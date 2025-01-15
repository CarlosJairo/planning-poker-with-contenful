import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ContentState {
  content: string[];
}
const initialState: ContentState = {
  content: []
}

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    addContent: (state, action: PayloadAction<string>) => {
      state.content.push(action.payload)
    },
    removeContent: (state, action: PayloadAction<number>) => {
      state.content.splice(action.payload, 1)
    }
  }
})

export const { addContent, removeContent } = contentSlice.actions;
export default contentSlice.reducer