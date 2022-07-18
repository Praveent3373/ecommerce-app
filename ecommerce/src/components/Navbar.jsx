import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { getTotal } from '../redux/action';

const Navbar = () => {
  const state = useSelector((state) => state.products.cart);
  // const qnty = useSelector((state) => state.products.qty);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal())
  })
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 px-3 shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
          E-commerce Application
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/products'>Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contact'>Contact</Link>
              </li>
            </ul>
              <div className="buttons">
                  <Link to='/login' className='btn btn-outline-dark'>
                      <i className='fa fa-sign-in me-2'> Login</i>
                  </Link>
                  <Link to='/register' className='btn btn-outline-dark'>
                      <i className='fa fa-user-plus me-2'> Register</i>
                  </Link>
                  <Link to='/cart' className='btn btn-outline-dark'>
                  <i className="fa fa-shopping-cart"> Cart ({state.length})</i>
                  </Link>
              </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar