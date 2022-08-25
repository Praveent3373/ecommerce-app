import React from 'react'
import {Link} from 'react-router-dom'
const PageHero = ({title, product}) => {
    return (
        <div className='page-hero'>
            <h3>
                <Link to='/'>Home</Link> 
                {product && <Link to='/products'>/ Products</Link>} / {title}
            </h3> 

        </div>
    )
}

export default PageHero