
const initialState = {
    cart: [],
    total: 0,
    qty: 1
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD': return {
            ...state, cart: [...state.cart, {...action.payload, qty: 1}]
        }
        case 'DEL': return {
            ...state, cart: state.cart.filter((elem) => elem.id !== action.payload)
        }
        case 'CLEAR': return {
            ...state, cart: []
        }
        // case 'INC': return {
        //     ...state, cart: state.cart.map((elem) => {
        //         if(elem.id === action.payload){
        //             return {...elem, qty: elem.qty +1}
        //         }
        //         return elem;
        //     })
        // }
        // case 'DEC': return {
        //     ...state, cart: state.cart.map((cartItem) => {
        //         if(cartItem.id === action.payload){
        //             return cartItem = {...cartItem, qty: cartItem.qty -1}
        //         }
        //         return cartItem;
        //     })
        // }
        case 'TOGGLE_QTY': return {
            ...state, cart: state.cart.map((cartItem) => {
                if(cartItem.id === action.payload.id){
                    if(action.payload.toggle === 'inc'){
                        return cartItem = {...cartItem, qty: cartItem.qty +1}
                    }
                    if(action.payload.toggle === 'dec'){
                        return cartItem = {...cartItem, qty: cartItem.qty -1}
                    }
                }
                return cartItem;
            })
        }
        case 'GET_TOTAL':
        let {total, qty} = state.cart.reduce((cartTotal, cartItem) => {
            const {price, qty} = cartItem;
            const itemTotal = price * qty;
            cartTotal.total += itemTotal;
            cartTotal.qty += qty;
            return cartTotal;
        },{
            total: 0, qty: 0
        })
        total = parseFloat(total.toFixed(2))
        return {...state, total, qty}
        default: return state;
    }
}