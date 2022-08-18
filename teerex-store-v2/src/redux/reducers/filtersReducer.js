import { nanoid } from "nanoid";
import ActionTypes from "../../utils/actionsTypes";

const initialState = {
    all_products: [],
    colors:[ 
        { "id": 1, "name": "Black", "checked": false },
        { "id": 2, "name": "Blue", "checked": false },
        { "id": 3, "name": "Pink", "checked": false },
        { "id": 4, "name": "Green", "checked": false },
        { "id": 5, "name": "Red", "checked": false },
        { "id": 6, "name": "Grey", "checked": false },
        { "id": 7, "name": "Purple", "checked": false },
        { "id": 8, "name": "White", "checked": false },
        { "id": 9, "name": "Yellow", "checked": false } 
    ],
    gender: [ { "id": 10, "name": "Men", "checked": false }, { "id": 11, "name": "Women", "checked": false } ],
    type: [ { "id": 12, "name": "Polo", "checked": false }, { "id": 13, "name": "Hoodie", "checked": false }, { "id":14, "name": "Basic", "checked": false } ],
    filtered_products: [],
    cart: [],
    amount: 0,
    total: 0
}

const filtersReducer = (state = initialState, action) => {
    if(action.type === ActionTypes.HANDLE_FILTER){
        const fitlers = (data) => {
            return data.map((el) => el.id === action.payload ? {...el, checked: !el.checked}: el)
        }
        const _gender = fitlers(state.gender);
        const _colors = fitlers(state.colors);
        const _type = fitlers(state.type);
        return {...state, gender: _gender, colors: _colors, type: _type}
    }
    if(action.type === ActionTypes.LOAD_PRODUCTS){
        return {...state, all_products: [...action.payload], filtered_products: [...action.payload]}
    }
    if(action.type === ActionTypes.ADD_PRODUCT){
        const newItems = state.cart.map((el) => {
            if(el.id === action.payload.id){
                return {...el, id: nanoid(5)}
            }
            return el;
        })
        return {...state, cart: [...newItems, action.payload] }
    }
    if(action.type === ActionTypes.REMOVE_PRODUCT){
        return {...state, cart: state.cart.filter((el) => el.id !== action.payload)}
    }
    if(action.type === ActionTypes.AMOUNT_TOGGLE){
        const newItems = state.cart.map((el) => {
            if(el.id === action.payload.id){
                if(action.payload.toggle === 'dec'){
                    el = {...el, quantity: el.quantity -1}
                }
                if(action.payload.toggle === 'inc'){
                    el = {...el, quantity: el.quantity +1}
                }
            }
            return el;
        })
        return {...state, cart: newItems }
    }
    if(action.type === ActionTypes.GET_TOTALS){
        const {total, amount} = state.cart.reduce((cartTotals, cartItems) => {
                const {quantity, price} = cartItems;
                cartTotals.amount += quantity
                cartTotals.total += price * quantity
                return cartTotals;
        },{total: 0, amount: 0})
        return {...state, total, amount}
    }
    if(action.type === ActionTypes.UPDATE_FILTER){
        let newProducts = [...state.all_products];
        const genderChecked = state.gender.filter((el) => el.checked).map((el) => el.name.toLowerCase());
        const typeChecked = state.type.filter((el) => el.checked).map((el) => el.name.toLowerCase());
        const colorsChecked = state.colors.filter((el) => el.checked).map((el) => el.name.toLowerCase());
        if(genderChecked.length){
            newProducts = newProducts.filter((el) => genderChecked.includes(el.gender.toLowerCase()))
        }
        if(typeChecked.length){
            newProducts = newProducts.filter((el) => typeChecked.includes(el.type.toLowerCase()))
        }
        if(colorsChecked.length){
            newProducts = newProducts.filter((el) => colorsChecked.includes(el.color.toLowerCase()))
        }
        
        return {...state, filtered_products: newProducts}
    }
    if(action.type === ActionTypes.CLEAR_FILTERS){
        const fitlers = (data) => {
            return data.map((el) => {
                return {...el, checked: false}
            })
        }
        const _gender = fitlers(state.gender);
        const _colors = fitlers(state.colors);
        const _type = fitlers(state.type);
        
        return {...state, gender: _gender, colors: _colors, type: _type}
    }
    return state;
}

export default filtersReducer;