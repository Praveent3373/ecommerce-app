import React from 'react'
import Filters from '../components/Filters'
import ProductsList from '../components/ProductsList'
import { useEffect } from 'react'
import { fetchProducts } from '../redux/actions'
import { useDispatch } from 'react-redux/es/exports'

const Products = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    },[])
    return (
        <div className='products-wrapper'>
            <Filters/>
            <ProductsList/>
        </div>
    )
}

export default Products