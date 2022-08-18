import ActionTypes from "../../utils/actionsTypes";

const initialState = {
    products_loading: false,
    products_error: false,
    products: [],
}

const productsReducer = (state = initialState, action) => {
    if(action.type === ActionTypes.PRODUCTS_LOADING){
        return {...state, products_loading: true}
    }
    if(action.type === ActionTypes.FETCH_PRODUCTS){
        return {...state, products_loading: false, products: action.payload}
    }
    if(action.type === ActionTypes.PRODUCTS_FAILED){
        return {...state, products: [], products_loading: false, products_error: true}
    }
    return state
}

export default productsReducer;