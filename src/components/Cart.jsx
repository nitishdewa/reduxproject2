import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleButtonClick = () => {
    navigate('/checkout', { state: { cartItems } }); // Pass cartItems as state
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item card">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="cart-item-controls">
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="btn-remove">Remove from Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
      {cartItems.length > 0 && (
        <div>
          <button onClick={handleButtonClick}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
