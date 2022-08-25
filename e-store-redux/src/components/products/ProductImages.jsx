import React, { useState } from 'react'

const ProductImages = ({images = [{url: ''}]}) => { // initilay images undefined that's why set it to empty // es6
    const [main, SetMain] = useState(images[0])
    console.log(main);
    return (
        <div className='images'>
            <div className='images images--main'>
                <img src={main.url} alt="main" />
            </div>
            <div className='images images--thumbnail'>
                {images.map((el, i) => {
                    return <img 
                        src={el.url} 
                        alt={el.filename}
                        key={i} 
                        onClick={() => SetMain(images[i])}
                        className={`${el.url === main.url ? 'active': null}`}
                    />
                })}
            </div>
            
        </div>
    )
}

export default ProductImages