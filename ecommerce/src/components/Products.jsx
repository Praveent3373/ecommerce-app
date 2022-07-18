import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { addtoCart } from '../redux/action';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    const dispatch = useDispatch();

    const getProducts = async() => {
        setLoading(true);
        const resp = await axios.get('https://fakestoreapi.com/products');
        const products = await resp.data;
        if(componentMounted){
            setData(products);
            setFilter(products);
            setLoading(false);
        }
    }
    useEffect(() => {
        getProducts();
        // return () => {
        //     componentMounted = false;
        // }
    },[])

    const Loading = () => {
        return (
            <>
            {/* <h5>Loading...</h5> */}
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
        </>
        )
    }

    const filterProducts = (category) => {
        const updatedList = data.filter((product) => product.category === category)
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return <>
            <div className="buttons my-5 d-flex justify-content-center">
                <button onClick={() => setFilter(data)} className="btn btn-outline-dark me-2">All</button>
                <button onClick={() => filterProducts("men's clothing")} className="btn btn-outline-dark me-2">Men's Clothing</button>
                <button onClick={() => filterProducts("women's clothing")} className="btn btn-outline-dark me-2">Women's Clothing</button>
                <button onClick={() => filterProducts("jewelery")} className="btn btn-outline-dark me-2">Jewelery</button>
                <button onClick={() => filterProducts("electronics")} className="btn btn-outline-dark me-2">Electronic</button>
            </div>
            {filter.map((product) => {
                const {image, price, id, title} = product;
                    return  <div className="col-md-3 mb-4" key={id}>
                                <div className="card h-100 text-center p-4">
                                <Link to={`/products/${id}`}>
                                    <img src={image} alt={title} height="250px" width="100%" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{title.substring(0, 12)}...</h5>
                                    <p className="card-text">${price}</p>
                                    <a onClick={() => dispatch(addtoCart(product))} className='btn btn-outline-dark'>Add to Cart</a>
                                </div>
                                </div> 
                           </div>
                
            })}
        </>
    }
    return (
        <div className='container my-4 py-4'>
            <div className="row">
                <div className="col-12">
                    <h1>Latest Products</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    )
}

export default Products