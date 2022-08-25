import React from 'react'
import { formatPrice } from '../../utils/helpers'
import {FaTrash} from 'react-icons/fa'
import AmountButtons from './AmountButtons'
import {useDispatch} from 'react-redux'
import { removeItem, toggleAmt } from '../../redux/actions'

const CartItem = ({id, name, image, price, amount, color}) => {
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(toggleAmt(id, 'inc'))
    }
    const decrement = () => {
        dispatch(toggleAmt(id, 'dec'))
    }
    return (
        <div className='cart-item'>
            <div className='item'>
                <div className="image">
                    <img src={image} width="100%" alt={name} />
                </div>
                <div className='name'>
                    <h5>{name}</h5>
                    <p>color: <span style={{background: color, width: '15px', color:'transparent', height: '15px', borderRadius: '50%', display: 'inline-block', verticalAlign: 'middle'}}></span></p>
                </div>
            </div>
                <div className="price">
                    <h5>{formatPrice(price)}</h5>
                </div>
                <div className="amount">
                <AmountButtons amount={amount} increment ={increment} decrement = {decrement} />
                </div>
                <div className="subtotal">
                <h5>{formatPrice(price * amount)}</h5>
                </div>
                <div className="delete">
                <button onClick={() => dispatch(removeItem(id))}><FaTrash/></button>
                </div>
        </div>
    )
}

export default CartItem