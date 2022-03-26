import { combineReducers } from "redux";
import { contactReducers } from "./Contacts";
export const rootReducer = combineReducers({ contactReducers });