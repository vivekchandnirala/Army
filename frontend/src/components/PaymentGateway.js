import React from 'react';
import './PaymentGateway.css';

const PaymentGateway = ({ product, onClose }) => {
    const handlePayment = () => {
        alert(`₹${product.price} deducted from UPI ID: 7454829911@axl`);
        onClose();
    };

    return (
        <div className="payment-gateway-overlay" onClick={onClose}>
            <div className="payment-gateway-content" onClick={(e) => e.stopPropagation()}>
                <h2>Payment Gateway</h2>
                <p>Product: {product.name}</p>
                <p>Amount: ₹{product.price}</p>
                <button onClick={handlePayment}>Pay with UPI</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default PaymentGateway;
