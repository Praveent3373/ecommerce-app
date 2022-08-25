import React from 'react'
import { Filters, PageHero, ProductsList, Sort } from '../components';

const Products = () => {
  return (
    <>
    <PageHero title='products' />
    <div className='products'>
        <Filters/>
        <div className="list">
            <Sort/>
            <ProductsList/>
        </div>
    </div>
    </>
  )
}

export default Products