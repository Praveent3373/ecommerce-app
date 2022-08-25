import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { fetchProducts } from '../redux/actions';
import { Banner, Contact, Featured, Hero, Services } from '../components'


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])
    return (
        <div className='homepage'>
            <Banner/>
            <div className="content">
                <Hero/>
                <Featured/>
                <Services/>
                <Contact/>
            </div>
        </div>
    )
}

export default Home