import React, { useState } from 'react'
import {FaCheck} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addtoCart } from '../../redux/actions';

const AddToCart = ({product}) => {
const {id, stock, colors} = product;
const [mainColor, setMainColor] = useState(colors[0]);
const [amount, setAmount] = useState(1);

const dispatch = useDispatch();

const increment = () => {
    setAmount((prev) => {
        let tempAmount = prev +1;
        if(tempAmount > stock){
            tempAmount = stock
        }
        return tempAmount
    }) 
}
const decrement = () => {
    setAmount((prev) => {
        let tempAmount = prev -1;
        if(tempAmount < 1){
            tempAmount = 1
        }
        return tempAmount
    })
}
  return (
        <div className='add-to-cart'>
            <div className="colors">
                <span>Colors: </span>
                <span>{colors.map((el, index) => {
                    return <button 
                    key={index} 
                    style={{background: el}} 
                    className={`${mainColor === el ? 'color-btn active': 'color-btn'}`}
                    onClick={() => setMainColor(el)}
                    >{mainColor === el ? <FaCheck/> : null}</button>
                })}</span>
            </div>
            <div className="buttons">
                <div className="controls">
                    <button onClick={decrement} type='button'>-</button>
                    <span className='value'>{amount}</span>
                    <button onClick={increment} type='button'>+</button>
                </div>
                <button type='button'><Link to='/cart' onClick={() => dispatch(addtoCart(id, mainColor, amount, product))}>Add to Cart</Link></button>
            </div>
    </div>
  )
}

export default AddToCart