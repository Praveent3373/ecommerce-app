import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
          <div className="footer_heading">
           <p>©<span>E Store</span>
            {new Date().getFullYear() }
            &nbsp; All rights reserved</p>
          </div>
    </div>
  )
}

export default Footer