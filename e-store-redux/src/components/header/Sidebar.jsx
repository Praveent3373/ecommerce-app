import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useHeaderContext } from '../../context/header-context'
import { useUserContext } from '../../context/user-context'
import { links } from '../../utils/constants'

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useHeaderContext();
    const {myUser} = useUserContext(); 
    return (
        <div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar' }`}>
            <div className="sidebar__header">
                <div className="sidebar__header sidebar__header--logo">
                    <h3>E Store</h3>
                </div>
                <div className="sidebar__header sidebar__header--close">
                    <button type='button' onClick={closeSidebar}><FaTimes/></button>
                </div>
            </div>
            <ul className="sidebar__links">
                {links.map((el) => {
                    return <li key={el.id}><Link to={el.url} onClick={closeSidebar}>{el.text}</Link></li>
                })}
                {myUser && <li><Link to ="/checkout" onClick={closeSidebar}>checkout</Link></li>}
            </ul>
        </div>
    )
}

export default Sidebar