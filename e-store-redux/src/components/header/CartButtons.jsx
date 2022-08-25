import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {FaShoppingCart, FaUser, FaUserMinus} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getTotals } from '../../redux/actions'
import { useUserContext } from '../../context/user-context'
const CartButtons = () => {
    const cart = useSelector((state) => state.cart.cart);
    const total_items = useSelector((state) => state.cart.total_items);
    const {loginWithRedirect, myUser, logout} = useUserContext()
    
    const dispatch = useDispatch()
    useEffect(() => {   
        dispatch(getTotals())
    },[cart, dispatch])
    return (
        <div className='cart-btns'>
            <Link to='./cart' className="cart-btns__btn">
                Cart
                <span className="cart-value">
                    <FaShoppingCart/>
                    <span>{total_items}</span>
                </span>
            </Link>
            {myUser ? 
            <button className='cart-btns__auth' onClick={() => logout({returnTo: window.location.origin})}>
                Logout <FaUserMinus/>
            </button> 
            : <button className='cart-btns__auth' onClick={loginWithRedirect}>
                Login <FaUser/>
            </button>}
        </div>
    )
}

export default CartButtons