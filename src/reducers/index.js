import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import phones from "./phones";

const rootReducers = combineReducers({
    phones,
})

export const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
)