import { combineReducers } from "redux";
import themeSlice from "./features/theme/themeSlice";
import { baseApi } from "./features/api/baseApi";
import userSlice from "./features/users/userSlice";

const rootReducer = combineReducers({
  theme: themeSlice,
  loggedUser: userSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});
export default rootReducer;
