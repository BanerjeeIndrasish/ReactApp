import { applyMiddleware, legacy_createStore } from "redux";
import {thunk} from "redux-thunk"
import combinedReducer from "./reducers/combinedReducer"


export const store = legacy_createStore(combinedReducer, {}, applyMiddleware(thunk));
export default store;
