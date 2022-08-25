import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./redux/reducers/cartReducer";
import filtersReducer from "./redux/reducers/filtersReducer";
import productsReducer from "./redux/reducers/productsReducer";

const reducers = combineReducers({
    products: productsReducer,
    filters: filtersReducer,
    cart: cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = localStorage.getItem('redux state') ? JSON.parse(localStorage.getItem('redux state')) : {}

const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(thunk)))

store.subscribe(() => {
    localStorage.setItem('redux state', JSON.stringify(store.getState()))
    console.log(store.getState().cart)
})

export default store;