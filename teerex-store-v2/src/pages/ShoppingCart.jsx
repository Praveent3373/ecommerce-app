import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import {Link} from 'react-router-dom'
import { amountToggle, getTotals, removeProduct } from '../redux/actions';

const ShoppingCart = () => {
    const data = useSelector((state) => state.filters.cart);
    const amount = useSelector((state) => state.filters.amount);
    const total = useSelector((state) => state.filters.total);
    const dispatch = useDispatch()
    console.log(data);
    useEffect(() => {
        dispatch(getTotals());
    },[data])
    return (
        <div className='cart'>
            <h2>Shopping Cart</h2>
             <ul>
             {data.map((el) => {
                const {name, price, id, imageURL, quantity} = el;
                return <li key={id} className='product'>
                     <div className="product__image">
                            <img src={imageURL} alt={name} />
                       </div>
                       <div className="product__details">
                        <h5>{name}</h5>
                        <p>₹ {price}</p>
                       </div>
                       <div className="product__actions">
                        <div className="controls">
                        <button onClick={() => {
                            if(quantity === 1){
                                dispatch(removeProduct(id))
                            }
                            dispatch(amountToggle('dec', id))
                         }} className='product__actions product__actions--btnSm'>-</button>
                            <span>{quantity}</span>
                         <button onClick={() => dispatch(amountToggle('inc', id))} className='product__actions product__actions--btnSm'>+</button>

                        </div>
                        <button onClick={() => dispatch(removeProduct(id))} className='product__actions product__actions--btnLg'>Delete</button>
                       </div>
                </li>
            })}
            {data.length > 0 ? (
            <>
            <h5>Number of Products : {amount}</h5>
            <h5>Amount: {total}</h5>
            </>
            ) : (
                <div className='go-back'>
                    <h2>No Products Added</h2>
                    <Link to='/products'><button>Go to Products Page</button></Link>
                </div>
            )}
             </ul>
        </div>
    )
}

export default ShoppingCart