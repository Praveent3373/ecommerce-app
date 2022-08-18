import React from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';

const Header = () => {
    const products = useSelector((state) => state.filters.cart);
    return (
        <div className='header'>
                <ul className="header__links">
                    <li><Link className='header__links header__links--link' to='/products' style={{color: 'tomato'}}>TeeRex Store</Link></li>
                    <li><Link className='header__links header__links--link' to='/shopping-cart'>Cart Items ({products.length})</Link></li>
                </ul>
        </div>
    )
}

export default Header