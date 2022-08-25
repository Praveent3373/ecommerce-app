import { ActionTypes } from "../../utils/ActionTypes"

const initialState = {
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],

    single_product_loading: false,
    single_product_error: false,
    single_product: {},

}

const productsReducer = (state = initialState, action) => {
    if(action.type === ActionTypes.GET_PRODUCTS_LOADING){
        return {...state, products_loading: true, products_error: false}
    }
    if(action.type === ActionTypes.GET_PRODUCTS_SUCCESS){
        const featured_products = action.payload.filter((el) => el.featured === true)
        return {...state, 
            products_loading: false,
            products: action.payload,
            featured_products 
        }
    }
    if(action.type === ActionTypes.GET_PRODUCTS_ERROR){
        return {...state, products_loading: false, products_error: true}
    }

    if(action.type === ActionTypes.GET_SINGLE_PRODUCT_LOADING){
        return {...state, single_product_loading: true, single_product_error: false}
    }
    if(action.type === ActionTypes.GET_SINGLE_PRODUCT_SUCCESS){
        return {...state, single_product_loading: false, single_product: action.payload}
    }
    if(action.type === ActionTypes.GET_SINGLE_PRODUCT_ERROR){
        return {...state, single_product_loading: false, single_product_error: true }
    }
    return state;
    // return new Error(`No Matching ${action.type} - action type`)
}

export default productsReducer;