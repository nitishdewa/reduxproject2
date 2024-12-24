import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || []; // Get cartItems passed via state
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    paymentDetails: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    address: '',
    paymentDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {
      name: '',
      address: '',
      paymentDetails: '',
    };

    if (!userInfo.name.trim()) {
      formIsValid = false;
      newErrors.name = 'Name is required.';
    }

    if (!userInfo.address.trim()) {
      formIsValid = false;
      newErrors.address = 'Address is required.';
    }

    if (!userInfo.paymentDetails.trim()) {
      formIsValid = false;
      newErrors.paymentDetails = 'Payment details are required.';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Order placed successfully!');
      // Here you would generally send the form data to a backend
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div><br />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div><br />
          <label>Address:</label>
          <textarea
            name="address"
            value={userInfo.address}
            onChange={handleChange}
            required
          ></textarea>
          {errors.address && <p className="error">{errors.address}</p>}
        </div>
        <div><br />
          <label>Payment Details:</label>
          <input
            type="text"
            name="paymentDetails"
            value={userInfo.paymentDetails}
            onChange={handleChange}
            required
          />
          {errors.paymentDetails && <p className="error">{errors.paymentDetails}</p>}
        </div>
        <div>
          <h3>Order Summary</h3>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.title} - {item.quantity} x ${item.price}
                </li>
              ))}
            </ul>
          ) : (
            <p>No items in the cart</p>
          )}
          <p>Total: ${calculateTotal()}</p>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Checkout;
