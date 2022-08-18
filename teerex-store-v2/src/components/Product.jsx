import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addProduct, clearFilters, fetchProducts, loadProducts, udpateFilters } from '../redux/actions';

const Product = () => {
    const products = useSelector((state) => state.filters.filtered_products);
    const gender = useSelector((state) => state.filters.gender);
    const colors = useSelector((state) => state.filters.colors);
    const type = useSelector((state) => state.filters.type);
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(udpateFilters())
    },[gender, colors, type, clearFilters])
    return (
        <>
            {products.map((el) => {
                const {id, name, imageURL, price} = el;
                return <div key={id} className='product'>
                    <div className="product__name">
                        <h5>{name}</h5>
                    </div>
                    <div className="product__image">
                        <img src={imageURL} alt={name} />
                    </div>
                    <div className="product__details">
                        <div className="product__details product__details--price">
                            <h5>₹ {price}</h5>
                        </div>
                        <div className="product__details product__details--button">
                            <button onClick={() => dispatch(addProduct(el))}>Add to Cart</button>
                        </div>
                    </div>
            </div>
            })}
        </>
    )
}

export default Product