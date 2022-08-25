import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { filterProducts, loadProucts, sortProducts } from '../../redux/actions';
import Product from './Product';

const ProductsList = () => {
  const data = useSelector((state) => state.products.products);
  const products = useSelector((state) => state.filters.filtered);
  const sort = useSelector((state) => state.filters.sort);
  const filters = useSelector((state) => state.filters.filters);
  const companys = useSelector((state) => state.filters.companys);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadProucts(data));
  },[data, dispatch])
  useEffect(() => {
    dispatch(sortProducts())
  },[sort, dispatch])
  useEffect(() => {
    dispatch(filterProducts())
  },[filters, companys, dispatch])
  return (
    <div className='products-list'>
        {products.map((el) => {
          return <Product key={el.id} {...el}/>
        })}
    </div>
  )
}

export default ProductsList