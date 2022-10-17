import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import dataReducer from "./reducer";

const store = createStore(dataReducer, applyMiddleware(thunk, logger));
export default store;
