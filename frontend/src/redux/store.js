import { applyMiddleware, legacy_createStore } from "redux";

import { reducer as orderReducer } from "./orderReducer/reducer";
import { thunk } from "redux-thunk";

export const store=legacy_createStore(orderReducer,applyMiddleware(thunk))