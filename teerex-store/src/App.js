import './main.scss';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Home, Products, Product, Cart, Error } from './pages';
import {Navbar, Filters, Footer} from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <div className="main">
        {/* <Filters/> */}
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/products/:id' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='*' element={<Error/>} />
          </Routes>
        </div>
      <Footer/>   
    </BrowserRouter>
  );
}

export default App;
