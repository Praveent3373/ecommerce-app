import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { PageHero } from '../components';
import CartContent from '../components/cart/CartContent';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  if(cart.length < 1){
    return <div className='empty-cart'>
      <h2>Your Cart is Empty</h2>
      <Link to='/products'>Go to Products Page</Link>
    </div>
  }
  return (
    <>
      <PageHero title='Cart'/>
      <div className='cart'>
        <CartContent/>
      </div>
    </>
  )
}

export default Cart