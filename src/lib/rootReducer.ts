import { combineReducers } from "redux";
import themeSlice from "./features/theme/themeSlice";

const rootReducer = combineReducers({
  theme: themeSlice,
});
export default rootReducer;
