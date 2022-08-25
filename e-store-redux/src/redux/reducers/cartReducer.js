import { ActionTypes } from "../../utils/ActionTypes";

const initialState = {
    cart: [],
    total_items: 0,
    total_amount: 0,
    shipping_fee: 500
}

const cartReducer = (state = initialState, action) => {
    if(action.type === ActionTypes.ADD_TO_CART){
        const {id, color, amount, product} = action.payload;
        console.log(action.payload);
        const newItem = state.cart.find((i) => i.id === id + color);
        if(newItem){
            const newCart = state.cart.map((el) => {
                if(el.id === id + color){
                    let newAmount = el.amount + amount
                    if(newAmount > el.max){
                        newAmount = el.max;
                    }
                    return {...el, amount: newAmount}
                }
                else{
                    return el;
                }
            })
            return {...state, cart: newCart}
        }
        else{
            const newProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.images[0].url,
                price: product.price,
                max: product.stock
            }
            return {...state, cart: [...state.cart, newProduct]}
        }
    }
    if(action.type === ActionTypes.REMOVE_ITEM){
        return {...state, cart: state.cart.filter((el) => el.id !== action.payload)}
    }
    if(action.type === ActionTypes.TOGGLE_AMOUNT){
        const newCart = state.cart.map((el) => {
            const {id, value} = action.payload;
            if(el.id === id){
                if(value === 'dec'){
                    let newAmt = el.amount -1
                    if(newAmt < 1){
                        newAmt = 1
                    }
                    return {...el, amount: newAmt}
                }
                if(value === 'inc'){
                    let newAmt = el.amount +1;
                    if(newAmt > el.max){
                        newAmt = el.max;
                    }
                    return {...el, amount: newAmt}
                }
            }
            return el;
        })
        return {...state, cart: newCart }
    }
    if(action.type === ActionTypes.GET_TOTALS){
        const { total_items, total_amount} = state.cart.reduce((total, cartItem) => {
            const {price, amount} = cartItem;
            total.total_items += amount;
            total.total_amount += price * amount
            return total;
        }, {
            total_items: 0, total_amount: 0
        })
        return {...state, total_amount, total_items}
    }
    if(action.type === ActionTypes.CLEAR_CART){
        return {...state, cart: []}
    }

    return state;
}

export default cartReducer;