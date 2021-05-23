import {combineReducers} from "redux";
import flatsReducer from "./flatsReducer";

export const rootReducer = combineReducers({
  flats: flatsReducer
});