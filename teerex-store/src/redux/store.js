import { combineReducers, createStore, compose } from "redux";
import { productsReducer } from "./reducers/productsReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({
    products: productsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,  composeEnhancers(applyMiddleware(thunk)));

export default store;