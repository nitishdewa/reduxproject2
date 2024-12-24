import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products'); // Use Axios to fetch data
        setProducts(response.data); // Update the state with the fetched products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Call the function
  }, []);

  return (
    <div className="products">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
