import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadProducts, } from '../redux/actions'
import Product from './Product'

const ProductsList = () => {
    const data = useSelector((state) => state.products.products);
    const products = useSelector((state) => state.filters.filtered_products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProducts(data))
    },[data])
    return (
        <>
            <div className='products'>
            <h5>{products.length} Products Found</h5>
                <div className="products-list">
                    <Product/>
                </div>
            </div>
        </>
    )
}

export default ProductsList