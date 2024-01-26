import { createSlice } from "@reduxjs/toolkit";

interface userState {
  id: String | null;
  email: String | null;
  role: string | null;
}

export const initialStateUser: userState = {
  role: null,
  id: null,
  email: null,
};

const userSlice = createSlice({
  name: "loggedInUser",
  initialState: initialStateUser,
  reducers: {
    setUser: (state, action) => {
      console.log("payload :", action.payload);
      state.role = action.payload.role;
      console.log("after set :", state.role);

      state.id = action.payload.id;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
