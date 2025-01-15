import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface content {
  [key: string]: string
}
export interface ContentState {
  content: content;
}

const initialState: ContentState = {
  content: {}
}

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    addContent: (state, action: PayloadAction<content>) => {
      state.content = action.payload
    },
  }
})

export const { addContent } = contentSlice.actions;
export default contentSlice.reducer