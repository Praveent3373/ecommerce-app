import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import {Products, ShoppingCart} from './pages/index'
function App() {
  return (
    <div className="main">
        <BrowserRouter>
            <Header/>
              <div className="content">
                <Routes>
                  <Route path="/products" element={<Products/>}/>
                  <Route path="/shopping-cart" element={<ShoppingCart/>}/>
                </Routes>
              </div>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
