import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';

function App() {
  return (
    <div className="app">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/products/:id' element={<Product />}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
  );
}

export default App;
