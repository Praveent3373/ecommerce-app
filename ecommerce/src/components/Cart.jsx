import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { clearCart, decrementItem, delProduct, getTotal, incrementItem, toggleQty } from '../redux/action';
import {useNavigate} from 'react-router-dom';
const Cart = () => {
  const state = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const total = useSelector((state) => state.products.total);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTotal());
    if(state.length < 1){
      navigate('/');
    }
  })
  return (
    <div className='container mt-5'>
      <h1 className='mb-5'>Cart Items</h1>
        {state.map((elem) => {
          const {image, title, price, qty, id} = elem;
          return <div key={id} className='row mb-3 border p-3'>
            <div className="col-md-3">
              <img src={image} alt={title} height="140px" width="140px" />
            </div>
            <div className="col-md-9">
              <h3>{title.substring(0, 50)}</h3>
              <h4 className='my-4'>${price} x {qty} = ${parseFloat((price * qty)).toFixed()}</h4>
              <button onClick={() => {
                if(qty === 1){
                  dispatch(delProduct(id))
                }
                else{
                  dispatch(toggleQty(id, 'dec'))
                }
              }} className='btn btn-outline-dark me-4'>
                <i className='fa fa-minus'></i>
              </button>
               <span>{qty}</span>
              <button onClick={() => dispatch(toggleQty(id, 'inc'))} className='btn btn-outline-dark ms-4'>
                <i className='fa fa-plus'></i>
              </button>
              <button onClick={() => dispatch(delProduct(id))} className='btn btn-outline-dark ms-4'>
                <i className='fa fa-trash'> Delete</i>
              </button>
            </div>
          </div>
        })}
        {state.length > 0 && ( <div className="row my-5">
            <div className="col">
              <button onClick={() => dispatch(clearCart())} className='btn btn-outline-dark'><strong>Clear Cart</strong></button>
            </div>
            <div className="col">
              <h1>Total Amount: ${total}</h1>
            </div>
        </div>)}
    </div>
  )
}

export default Cart