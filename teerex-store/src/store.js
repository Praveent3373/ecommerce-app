import filtersReducer from "./redux/reducers/filtersReducer";
import productsReducer from "./redux/reducers/productsReducer";
import {createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

// const { combineReducers, createStore, compose, applyMiddleware } = require("redux");
// const { default: thunk } = require("redux-thunk");

const reducers = combineReducers({
        products: productsReducer,
        filters: filtersReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
export default store;