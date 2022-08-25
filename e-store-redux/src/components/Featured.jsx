import React from 'react'
import { useSelector } from 'react-redux'
import Loading from './Loading';
import Error from './Error';
import Product from './products/Product';
const Featured = () => {
  const products_loading = useSelector((state) => state.products.products_loading);
  const products_error = useSelector((state) => state.products.products_loading);
  const featured = useSelector((state) => state.products.featured_products);
  if(products_loading){
      return <Loading/>
  }
  if(products_error){
    return <Error/>
  }
  return (
    <div className='featured'>
        <h2 className='title'>Featured Products</h2>
        {featured.slice(0, 4).map((el) => {
          return <Product key={el.id} {...el}/>
        })}
    </div>
  )
}

export default Featured