import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Filters } from '../components'
import { fetchProducts } from '../redux/actions'
import Product from './Product'

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  },[]);
  console.log(products)
  return (
    <div className="products-container">
      <div className="filters-wrapper">
          <Filters/>
      </div>
      <div className='products-wrapper'>
          <Product/>
      </div>
    </div>
  )
}

export default Products