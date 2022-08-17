import axios from "axios"
import { ActionTypes } from "../constants/action-types"
import { products_api as url } from "../../utils/constants"

export const fetchProducts = () => async (dispatch) => {
    const resp = await axios.get(url);
    dispatch({
        type: ActionTypes.FETCH_PRODUCTS, payload: resp.data
    })
}

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectProduct = (product) => {
    return {
        type: ActionTypes.SELECT_PRODUCT,
        payload: product
    }
}

export const removeProduct = (id) => {
    return {
        type: ActionTypes.REMOVE_PRODUCT,
        payload: id
    }
}

export const increment = (id) => {
    return {
        type: ActionTypes.INCREMENT,
        payload: id
    }
}

export const getTotals = () => {
    return {
        type: ActionTypes.GET_TOTALS
    }
}

export const handleColor = (id) => {
    return {
        type: ActionTypes.HANDLE_CHANGE,
        payload: id
    }
}

export const filterProducts = () => {
    return {
        type: ActionTypes.FILTER_PRODUCTS,
    }
}

