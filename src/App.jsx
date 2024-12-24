import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';  // Import Checkout component

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>  {/* Add Checkout link */}
      </nav>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />  {/* Add Checkout route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
