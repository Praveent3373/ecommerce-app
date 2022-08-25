import React from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { links } from '../../utils/constants'
import CartButtons from './CartButtons'
import { useHeaderContext } from '../../context/header-context'
import { useUserContext } from '../../context/user-context'

const Header = () => {
  const {openSidebar} = useHeaderContext()
  const {myUser} = useUserContext()
  console.log(myUser)
  return (
    <div className='navbar'>
        <div className="navbar__header">
            <div className="navbar__header--toggle">
                <button type='button' onClick={openSidebar}>{<FaBars/>}</button>
            </div>
            <div className="navbar__header--logo">
                <Link to='/'><h3>E Store</h3></Link>
            </div>
        </div>
        <ul className="navbar__links">
            {links.map((el) => {
                const {id, text, url} = el;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                )
            })}
            {myUser && <li><Link to ="/checkout" >checkout</Link></li>}
        </ul>
        <div className="navbar__greet">
            {myUser && <p>Welcome, {myUser.name.charAt(0).toUpperCase() + myUser.name.slice(1)}</p>}
        </div>
        <CartButtons/>
    </div>
  )
}

export default Header