import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import {useParams, Link} from 'react-router-dom';
import { addtoCart } from '../redux/action';

const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    
    const getProduct = async() => {
        setLoading(true)
        const resp = await axios.get(`https://fakestoreapi.com/products/${id}`)
        const data = await resp.data;
        setProduct(data);
        setLoading(false);
    }
    useEffect(() => {
        getProduct()
    },[id])   

    const Loading = () => {
        return (
            <>
                {/* <h5>Loading...</h5> */}
                <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6">
                    <Skeleton height= {50} width={300}/>
                    <Skeleton height= {75} width={250}/> 
                    <Skeleton height= {50} width={200}/>
                    <Skeleton height= {158} />
                    <Skeleton height= {50} width={280}/>
                </div>
            </>
        )
    }
    const Product = () => {
        const {image, category, title, rating, price, description} = product;
        return <>
                    <div className="col-md-6">
                        <img src={image} alt={title} height="400px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <h3 className='text-uppercase'>{category}</h3>
                        <h2>Rating {rating && rating.rate} <i className='fa fa-star'></i></h2>
                        <h4>${price}</h4>
                        <p className='lead'>{description}</p>
                        <button onClick={() => dispatch(addtoCart(product))} className='btn btn-outline-dark'>Add to Cart</button>
                        <Link to="/cart" className='btn btn-outline-dark ms-2'>
                            Go to Cart 
                        </Link>
                    </div>
                </>
    }

    return (
        <div className='container mt-5'>
            <div className="row">
                {loading ? <Loading/> : <Product/>}
            </div>
        </div>
    )
}

export default Product