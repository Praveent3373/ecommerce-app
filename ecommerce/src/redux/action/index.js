
export const addtoCart = (product) => {
    return {
        type: 'ADD',
        payload: product
    }
}
export const delProduct = (id) => {
    return {
        type: 'DEL',
        payload: id
    }
}
export const clearCart = () => {
    return {
        type: 'CLEAR',
    }
}
export const incrementItem = (id) => {
    return {
        type: 'INC',
        payload: id
    }
}
export const decrementItem = (id) => {
    return {
        type: 'DEC',
        payload: id
    }
}
export const toggleQty = (id, toggle) => {
    return {
        type: 'TOGGLE_QTY',
        payload: {id, toggle}
    }
}

export const getTotal = () => {
    return {
        type: 'GET_TOTAL'
    }
}