import React from 'react'
import { Link } from 'react-router-dom'
import about_image from '../../assets/images/about_image.avif'

const Hero = () => {
    return (
        <div className='hero section-center'>
            <div className="hero__content">
            <h2 className='title'>Explore Products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorum illum minima repudiandae at veritatis consequuntur id enim vel facere mollitia. Enim porro quaerat eaque non quo asperiores blanditiis natus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorum illum minima repudiandae at veritatis consequuntur id enim vel facere mollitia. Enim porro quaerat eaque non quo asperiores blanditiis natus!
            </p>
            <button type='button'><Link to='/products'>Shop Now</Link></button>
            </div>
            <div className="hero__image">
                <img src={about_image} alt='about' />
            </div>
       </div>
    )
}

export default Hero