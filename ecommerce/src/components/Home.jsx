import banner from '../assets/banner.jpg'
import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <>  
            <div className='banner'>
                <div className="banner-content" style={{height: '500px'}}>
                    <div className="card-body">
                        <h1 className="card-title">Banner title</h1>
                        <h4 className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h4>
                    </div>
                </div>
            </div>
            <Products/>
        </>

    )
}

export default Home