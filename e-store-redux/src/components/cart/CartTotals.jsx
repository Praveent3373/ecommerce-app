import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useUserContext } from '../../context/user-context';
import { getTotals } from '../../redux/actions';
import { formatPrice } from '../../utils/helpers';
import {Link} from 'react-router-dom'

const CartTotals = () => {
    const cart = useSelector((state) => state.cart.cart)
    const total_amount = useSelector((state) => state.cart.total_amount)
    const shipping_fee = useSelector((state) => state.cart.shipping_fee)
    const {myUser, loginWithRedirect} =  useUserContext();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotals())
    },[cart, dispatch])
    return (
        <div className='totals'>
            <div className="details">
                <div className="subtotal">
                    <h3>Subtotal: {formatPrice(total_amount)}</h3>
                </div>
                <div className="fee">
                    <p>Shipping Fee: {formatPrice(shipping_fee)}</p>
                </div>
                <hr />
                <div className="total">
                    <h2>Order Total: {formatPrice(total_amount + shipping_fee)}</h2>
                </div>
            </div>
            {myUser ? <button><Link to="/checkout">Proceed to Checkout</Link></button> : <button type='button' onClick={loginWithRedirect}>Login</button>}
            
        </div>
    )
}

export default CartTotals