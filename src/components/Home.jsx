import React from 'react';
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Shopping Store</h1>

      <div className="offer-banner">
        <div className="offers">
          <div className="offer-item">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" alt="Product 1" />
            <p>30% OFF on Shoes</p>
          </div>
          <div className="offer-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHKQVHIIDavm-7QaHOn0BxGUM1NLiCWwrM6w&s" alt="Product 2" />
            <p>Buy 1 Get 1 on Watches</p>
          </div>
          <div className="offer-item">
            <img src="https://images.unsplash.com/photo-1532704102644-883111bdf82d?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 3" />
            <p>50% OFF on Jackets</p>
          </div>
          <div className="offer-item">
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 4" />
            <p>20% OFF on Smartphones</p>
          </div>
          <div className="offer-item">
            <img src="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=2226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 5" />
            <p>Discounts on Headphones</p>
          </div>
        </div>
      </div>

      <p>Discover the best products available online.</p>
      <img
        src="https://chargebacks911.com/wp-content/uploads/2023/08/Online-vs-In-Store-Shopping-blog.jpg"
        alt="Shopping Banner"
        className="home-image"
      />
      <button>Shop Now</button>
    </div>
  );
};

export default Home;
