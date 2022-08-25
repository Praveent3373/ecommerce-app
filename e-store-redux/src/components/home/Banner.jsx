import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { bannerUrls as banners } from '../../utils/constants'

const Banner = () => {
    return (
        <div className='banners'>
             <Carousel>
                {banners.map((el, i) => {
                    return  <div key={i}>
                        <img src={el} alt={i} />
                    </div>
                })}
            </Carousel>
        </div>
    )
}

export default Banner