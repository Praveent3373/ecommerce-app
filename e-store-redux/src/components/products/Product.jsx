import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/helpers'

const Product = ({id, name, image, price}) => {
  return (
    <div className='product'>
        <div className="product__image">
          <Link to={`/products/${id}`}>
              <img src={image} alt={name} />
           </Link>
        </div>
        <div className="product__details">
          <h5 className='product__details product__details--name'>{name}</h5>
          <h5 className='product__details product__details--price'>{formatPrice(price)}</h5>
        </div>
    </div>
  )
}

export default Product