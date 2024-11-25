import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onProductClick, onBuyNowClick }) => {
    return (
        <div className="product-card">
            <img
                src={product.image}
                alt={product.name}
                onClick={() => onProductClick(product)}
                className="product-image"
            />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <button className="Butt"onClick={() => onBuyNowClick(product)}>Buy Now</button>
        </div>
    );
};

export default ProductCard;