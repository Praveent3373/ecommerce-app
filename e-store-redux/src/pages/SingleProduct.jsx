import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate, useParams, } from 'react-router-dom';
import { AddToCart, Error, Loading, PageHero, ProductImages, Stars, } from '../components';
import { fetchProduct } from '../redux/actions';
import { single_product_url as url } from '../utils/constants';
import {formatPrice} from '../utils/helpers'

const SingleProduct = () => {
    const product_loading = useSelector((state) => state.products.single_product_loading);
    const product_error = useSelector((state) => state.products.single_product_error);
    const product = useSelector((state) => state.products.single_product);
    
    console.log("single" , product);
    
    const {id} = useParams();
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct(`${url}${id}`))
    },[id, dispatch])
    useEffect(() => {
        if(product_error){
            setTimeout(() => {
                navigate('/') 
            }, 5000);
        }
    },[product_error, navigate])
    if(product_loading){
        return <Loading/>
    }
    if(product_error){
        return <Error/>
    }
    const {id:SKU, name, price, description, stock, stars, reviews, company, images} = product;
    return (
        <>
            <PageHero title={name} product/>
            <div className='single-product'>
                    <div className="single-product__link">
                        <Link to='/products'>Back to Products</Link>
                    </div>
                    <div className="single-product__data">
                        <ProductImages images = {images}/>
                        <div className="content">
                            <h2 className='content__title'>{name}</h2>
                            <Stars stars = {stars} reviews = {reviews}/>
                            <h5 className='content__price'>{formatPrice(price)}</h5>
                            <p className='content__desc'>{description}</p>
                            <div className="content__info">
                                <span>Available: </span> 
                                {stock > 0 ? 'In Stock' : 'out of stock'}
                            </div>
                            <div className="content__info">
                                <span>SKU: </span> 
                                {SKU}
                            </div>
                            <div className="content__info">
                                <span>Brand: </span> 
                                {company}
                            </div>
                            <hr />
                            {stock > 0 && <AddToCart product = {product} />}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default SingleProduct