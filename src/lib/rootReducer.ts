import { combineReducers } from "redux";
import themeSlice from "./features/theme/themeSlice";
import { baseApi } from "./features/api/baseApi";

const rootReducer = combineReducers({
  theme: themeSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});
export default rootReducer;
