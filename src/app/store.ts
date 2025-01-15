import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/user/userSlice";
import gameSlice from "../reducers/game/gameSlice";
import contentSlice from "../reducers/content/contentSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    game: gameSlice,
    content: contentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
