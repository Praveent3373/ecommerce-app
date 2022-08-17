import React from 'react'
import { useSelector, useDispatch} from 'react-redux/es/exports';
import {Link} from 'react-router-dom';
import { selectProduct } from '../redux/actions';

const Product = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const renderList = products.map((product) => {
    const {id, imageURL, name, price} = product;
    return (
              <li key={id} className='product'>
                <div className="product-wrapper">
                  <div className="image-container">
                    <div className="product_name"><span>{name}</span></div>
                    <div className="product_image">
                      <img src={imageURL} width="100%" alt={name} />
                    </div>
                  </div>
                <div className="actions">
                    <h5>Rs {price}</h5>
                    <button type='button' onClick={() => dispatch(selectProduct(product))}>Add to cart</button>
                </div>
                </div>
              </li>
          )
  })
  return (
    <ul className='products'>{renderList}</ul>
  )
}

export default Product