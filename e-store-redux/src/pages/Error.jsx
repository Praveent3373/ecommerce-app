import React from 'react'
import {Link} from 'react-router-dom'
const Error = () => {
    return (
        <div className='error-page'>
            <h2>404</h2>
            <h4>Page not found</h4>
            <button><Link to='/'>Back to Home Page</Link></button>
        </div>
    )
}

export default Error