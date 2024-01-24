import { createSlice } from "@reduxjs/toolkit";

interface userState {
  name: string | null;
  id: String | null;
  email: String | null;
}

const initialState: userState = { name: null, id: null, email: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
