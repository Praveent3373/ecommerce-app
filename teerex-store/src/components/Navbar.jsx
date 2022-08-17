import React from 'react'
import {Link} from 'react-router-dom';
import { links } from '../utils/constants';
import {FaBars} from 'react-icons/fa';
import {BsCart3} from 'react-icons/bs'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.products.cart);
  return (
      <div className="navbar">
        <div className="nav-header">
            <Link to='/'><h2>TeeRex Store</h2></Link>
            <button className='btn-toggle' type='button'><FaBars/></button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const {id, text, url} = link;
            return <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          })}
          <li className='cart-button'><Link to='/cart'>
            <BsCart3/>
            <span className='cart-value'>{cartItems.length}</span>
            </Link>
          </li>
        </ul>
      </div>
  )
}

export default Navbar