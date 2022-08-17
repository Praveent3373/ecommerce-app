import { useEffect } from "react";
import { handleColor } from "../actions";
import { ActionTypes } from "../constants/action-types";

const intitialState = {
    products: [],
    cart: [],
    total: 0,
    amount: 0,
    colors: [
        {id: 1, checked: false, label: 'Red'},
        {id: 2, checked: false, label: 'Blue'},
        {id: 3, checked: false, label: 'Green'},
    ]
}

export const productsReducer = (state = intitialState, action) => {
    switch(action.type){
        case ActionTypes.FETCH_PRODUCTS: return {
            ...state, products: action.payload
        }
        case ActionTypes.SELECT_PRODUCT: return {
            ...state, cart: [...state.cart, action.payload]
        }
        case ActionTypes.REMOVE_PRODUCT: return {
            ...state, cart: state.cart.filter((product) => product.id !== action.payload)
        }
        case ActionTypes.INCREMENT: return {
            ...state, cart: state.cart.map((product) => {
                if(product.id === action.payload){
                    return {...product, quantity: product.quantity +1}
                }
                return product;
            })
        }
        case ActionTypes.GET_TOTALS:
        const {total, amount} = state.cart.reduce((cartTotal, cartItems) => {
            const {price, quantity} = cartItems;
            cartTotal.amount += quantity;
            cartTotal.total += price * quantity
            return cartTotal;
        }, {total: 0, amount: 0})    
        return {
            ...state, total, amount
        }
        case ActionTypes.HANDLE_CHANGE : return {
            ...state, colors: state.colors.map((item) => item.id === action.payload ? {...item, checked: !item.checked} : item)
        }
        case ActionTypes.FILTER_PRODUCTS: 
        let filterdData = intitialState.products;
        const colorsChecked = state.colors.filter(el => el.checked).map(el => el.label.toLowerCase());
        if(colorsChecked.length){
            filterdData = state.products.filter((el) => colorsChecked.includes(el.color.toLowerCase()))
        }
        return {
            ...state, products: filterdData
        }
        default: return state;
    }
}