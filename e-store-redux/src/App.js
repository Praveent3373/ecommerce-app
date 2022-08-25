import { Home, About, Products, Error, Cart, SingleProduct, Checkout, PrivateRoute, AuthWrapper } from "./pages";
import {Footer, Header, Sidebar} from './components'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {useDispatch} from 'react-redux';
import { fetchProducts } from "./redux/actions";
import {useEffect} from 'react'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchProducts())
  },[dispatch])
  return (
    <div className="main">
      <AuthWrapper>
        <BrowserRouter>
            <Header/>
            <Sidebar/>
              <div className="content">
                <Routes>
                    <Route path="/" element ={<Home/>}/>
                    <Route path="/about" element ={<About/>}/>
                    <Route path="/products" element ={<Products/>}/>
                    <Route path="/cart" element ={<Cart/>}/>
                    <Route path="/products/:id" element ={<SingleProduct/>}/>
                    <Route path="/checkout" element={<PrivateRoute><Checkout/></PrivateRoute>} />
                    <Route path="*" element ={<Error/>}/>
                </Routes>
              </div>
            <Footer/>
        </BrowserRouter>
        </AuthWrapper>
    </div>
  );
}

export default App;


