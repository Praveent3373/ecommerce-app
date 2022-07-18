import { combineReducers, createStore } from "redux";
import { cartReducer } from "./reducer/cartReducer";

const reducer = combineReducers({
    products: cartReducer
})

const store = createStore(reducer);
export default store;