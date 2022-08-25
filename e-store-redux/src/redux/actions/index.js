import axios from "axios"
import { ActionTypes } from "../../utils/ActionTypes"
import { products_url as url, } from "../../utils/constants"

export const fetchProducts = () => async (dispatch) => {
    const resp = await axios.get(url);
    const data = await resp.data;
    dispatch({type: ActionTypes.GET_PRODUCTS_LOADING})
    try {
        dispatch({
            type: ActionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({type: ActionTypes.GET_PRODUCTS_ERROR})
    }
}

export const fetchProduct = (data) => async (dispatch) => {
    const resp = await axios.get(data);
    const product = await resp.data;
    dispatch({type: ActionTypes.GET_SINGLE_PRODUCT_LOADING})
    try {
        dispatch({
            type: ActionTypes.GET_SINGLE_PRODUCT_SUCCESS,
            payload: product
        })
        
    } catch (error) {
        dispatch({type: ActionTypes.GET_SINGLE_PRODUCT_ERROR})
    }
}


export const loadProucts = (products) => {
    return {
        type: ActionTypes.LOAD_PRODUCTS,
        payload: products
    }
}

// sort
export const updateSort = (value) => {
    return {
        type: ActionTypes.UPDATE_SORT,
        payload: value
    }
}
export const sortProducts = () => {
    return {
        type: ActionTypes.SORT_PRODUCTS,
    }
}

// filters
export const updateFilters = (name, value) => {
    return {
        type: ActionTypes.UPDATE_FILTERS,
        payload: {name, value}
    }
}

export const filterProducts = () => {
    return {
        type: ActionTypes.FILTER_PRODUCTS,
    }
}

export const clearFilters = () => {
    return {
        type: ActionTypes.CLEAR_FILTERS
    }
}

export const updateCheckboxes = (id) => {
    return {
        type: ActionTypes.UPDATE_CHECKBOXES,
        payload: id
    }
}

// cart

export const addtoCart = (id, color, amount, product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {id, color, amount, product}
    }
}

export const removeItem = (id) => {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: id
    }
}
export const toggleAmt = (id, value) => {
    return {
        type: ActionTypes.TOGGLE_AMOUNT,
        payload: {id, value}
    }
}
export const clearCart = () => {
    return {
        type: ActionTypes.CLEAR_CART,
    }
}

export const getTotals = () => {
    return {
        type: ActionTypes.GET_TOTALS
    }
}