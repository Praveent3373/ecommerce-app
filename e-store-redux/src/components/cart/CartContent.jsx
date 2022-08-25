import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartColumns from './CartColumns'
import CartItem from './CartItem';
import {Link} from 'react-router-dom'
import CartTotals from './CartTotals';
import { clearCart } from '../../redux/actions';


const CartContent = () => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    return (
        <div className='content'>
            <CartColumns/>
            {cart.map((el) => {
                return <CartItem key={el.id} {...el}/>
            })}
            <hr />
            <div className="links-container">
                <Link to ="/products">Continue Shopping</Link>
                <button onClick={() => dispatch(clearCart())}>Clear Shopping Cart</button>
            </div>
            <CartTotals/>
        </div>
    )
}

export default CartContent