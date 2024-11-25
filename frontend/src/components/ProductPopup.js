import React from 'react';
import './ProductPopup.css';

const ProductPopup = ({ product, onClose }) => {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <img src={product.image} alt={product.name} className="popup-image" />
                <div className="popup-details">
                    <h2>{product.name}</h2>
                    <p>Price: ₹{product.price}</p>
                    <p>{product.description}</p>
                </div>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ProductPopup;
