import axios from "axios"
import ActionTypes from "../../utils/actionsTypes";
import { products_url as url } from "../../utils/constants";

export const fetchProducts = () => async (dispatch) => {
    const resp = await axios.get(url);
    const products = await resp.data;
    dispatch({type: ActionTypes.PRODUCTS_LOADING})
    try {
        dispatch({
            type: ActionTypes.FETCH_PRODUCTS, payload: products
        })
    } catch (error) {
        dispatch({
            type: ActionTypes.PRODUCTS_FAILED,
        })
    }
}

export const handleFilter = (id) => {
    return {
        type: ActionTypes.HANDLE_FILTER,
        payload: id
    }
}

export const loadProducts = (data) => {
    return {
        type: ActionTypes.LOAD_PRODUCTS,
        payload: data
    }
}

export const udpateFilters = () => {
    return {
        type: ActionTypes.UPDATE_FILTER
    }
}

export const clearFilters = () => {
    return {
        type: ActionTypes.CLEAR_FILTERS
    }
}

export const addProduct = (product) => {
    return {
        type: ActionTypes.ADD_PRODUCT,
        payload: product
    }
} 

export const removeProduct = (id) => {
    return {
        type: ActionTypes.REMOVE_PRODUCT,
        payload: id
    }
}

export const amountToggle = (toggle, id) => {
    return {
        type: ActionTypes.AMOUNT_TOGGLE,
        payload: {toggle, id}
    }
}

export const getTotals = () => {
    return {
        type: ActionTypes.GET_TOTALS,
    }
}