import { ActionTypes } from "../../utils/ActionTypes";

const initialState = {
    filtered: [],
    all_products: [],
    sort: 'price-lowest',
    filters: {
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false,
        checked: false
    },
    companys: [ 
        { "id": "dVHF", "name": "marcos", "checked": false },
        { "id": "8YjV", "name": "liddy", "checked": false },
        { "id": "UEb0", "name": "ikea", "checked": false },
        { "id": "6qmb", "name": "caressa", "checked": false } 
    ]
}


const filtersReducer = (state = initialState, action) => {
    if(action.type === ActionTypes.LOAD_PRODUCTS){
        let maxPrice = action.payload.map((el) => el.price);
        maxPrice = Math.max(...maxPrice);
        return {...state,
            all_products: [...action.payload],
            filtered: [...action.payload],
            filters: {...state.filters, max_price: maxPrice, price: maxPrice}
        }
    }
    if(action.type === ActionTypes.UPDATE_SORT){
        return {...state, sort: action.payload}
    }
    if(action.type === ActionTypes.SORT_PRODUCTS){
        const {sort, filtered} = state;
        let newProducts = [...filtered];
        if(sort === 'price-lowest'){
            newProducts = newProducts.sort((a, b) => {
                if(a.price < b.price){
                    return -1
                }
                if(a.price > b.price){
                    return 1
                }
                return 0
            })
        }
        if(sort === 'price-highest'){
            newProducts = newProducts.sort((a, b) => b.price - a.price)
        }
        if(sort === 'name-a'){
            newProducts = newProducts.sort((a, b) =>{
                return a.name.localeCompare(b.name)
            })
        }
        if(sort === 'name-z'){
            newProducts = newProducts.sort((a, b) =>{
                return b.name.localeCompare(a.name)
            })
        }
        return {...state, filtered: newProducts }
    }
    if(action.type === ActionTypes.UPDATE_FILTERS){
        const {name, value} = action.payload;
        return {...state, filters: {...state.filters, [name]: value}}
    }
    if(action.type === ActionTypes.UPDATE_CHECKBOXES){
        return {...state, companys: state.companys.map((el) => el.id === action.payload ? {...el, checked: !el.checked}: el)}
    }
    if(action.type === ActionTypes.FILTER_PRODUCTS){
        const {all_products} = state;
        const {text, category,company, color, shipping, price} = state.filters;
        const {companys} = state;
        let newProducts = [...all_products]
        if(text){
            newProducts = newProducts.filter((el) => {
                return el.name.toLowerCase().startsWith(text)
            })
        }
        if(category !== 'all'){
            newProducts = newProducts.filter((el) => el.category === category)
        }
        if(company !== 'all'){
            newProducts = newProducts.filter((el) => el.company === company)
        }
        if(color !== 'all'){
            newProducts = newProducts.filter((el) => {
                return el.colors.find((el) => el === color)
            })
        }
        newProducts = newProducts.filter((el) => el.price <= price);
        if(shipping){
            newProducts = newProducts.filter((el) => el.shipping === true)
        }

        // checkboxes
        const checkboxesChecked = companys.filter((el) => el.checked).map((el) => el.name.toLowerCase());
        if(checkboxesChecked.length && !checkboxesChecked.includes('all')){
            newProducts = newProducts.filter((el) => checkboxesChecked.includes(el.company.toLowerCase()))
        }
        return {...state, filtered: newProducts}
    }
    if(action.type === ActionTypes.CLEAR_FILTERS){
        return {...state, filters: {
            ...state.filters,
            text: '',
            company: 'all',
            category: 'all',
            color: 'all',
            price: state.filters.max_price,
            shipping: false
        }, companys: state.companys.map((el) => {
            return {...el, checked: false}
        }) }
    }
    
    return state;
}

export default filtersReducer;