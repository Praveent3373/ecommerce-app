import React from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getTotals, increment, removeProduct } from '../redux/actions';

const Cart = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const total = useSelector((state) => state.products.total);
  const quantity = useSelector((state) => state.products.amount);
  console.log(total);
  console.log(quantity);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getTotals());
  },[cartItems])
  return (
    <div className='cart-container'>
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {cartItems.map((product) => {
            const {id, name, imageURL, price, quantity} = product;
            return  <div className="cart-item" key={id}>
            <div className="product">
             <img width="100%" src={imageURL} alt={name} />
            </div>
            <div className="product-details">
             <h4>{name}</h4>
             <h5>Rs {price}</h5>
            </div>
            <div className="actions">
             <button type='button' onClick={() => dispatch(increment(id))}><span>Qty: {quantity}</span></button>
             <button type='button' onClick={() => dispatch(removeProduct(id))}>Delete</button>
            </div>
         </div>
          })}
          <div className="cart-totals">
             {cartItems.length > 0 && ( <><h5>No of Products: {quantity}</h5><br /><h5>Total Amount: {total}</h5></>)}
          </div>
        </div>
    </div>
  )
}

export default Cart