import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductPopup from '../components/ProductPopup';
import PaymentGateway from '../components/PaymentGateway';
import './Shop.css';

const Shop = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showPayment, setShowPayment] = useState(false);

    const books = [
        { name: "Mission NDA : Serve At Young Age (National Defence Academy Entrance Examination) ", price: 448, image: require('../assets/shop/books/nda.jpg') },
        { name: "Arihant Pathfinder CDS Combined Defense Services Entrance Examination | 8000+ MCQs / PYQs ", price: 619, image: require('../assets/shop/books/cds.jpg') },
        { name: "Arihant Pathfinder CDS OTA Entrance Examination |Combined Defence Services | Officers Training Academy", price: 384, image: require('../assets/shop/books/OTA.jpg') },
        { name: "PERSONALITY DEVELOPMENT : A SURE SHOT GUIDE TO CRACK SSB", price: 381, image: require('../assets/shop/books/Personality.jpg') },
        { name: "SSB OIR & PPDT : Complete Guide To Stage 1 SSB Interview (English)", price: 319, image: require('../assets/shop/books/OIR.jpg') },
        { name: "SSB Interview : PPDT Narration Guide & Workbook", price: 189, image: require('../assets/shop/books/PPDT.jpg') },
        { name: "SSB Psychological Tests - SSB Interview (TAT/WAT/SRT/SD)", price: 338, image: require('../assets/shop/books/Psy.jpg') },
        { name: "Oswaal Practical Approach to SSB Interview", price: 331, image: require('../assets/shop/books/Interview.jpg') },
        // Add other books here...
    ];

    const clothes = [
        { name: "Army T-Shirt", price: 500, image: require('../assets/shop/clothes/tshirt.jpg') },
        { name: "Men's Premium Cargo Pants", price: 889, image: require('../assets/shop/clothes/pant.jpg') },
        { name: "Commando Scarf | Scarf for Men Military Scarf Combat Camouflage", price: 329, image: require('../assets/shop/clothes/Scarf.jpg') },
        // Add other clothes here...
    ];

    const accessories = [
        { name: "Leather Combat Army Boot Shoes/Army Shoes/DMS Shoes Shoes for Men ARM19", price: 1299, image: require("../assets/shop/accessories/shoes.jpg") },
        { name: "Hard Knuckle Army Shooting Tactical Gloves For Boys&Men (Green)", price: 349, image: require("../assets/shop/accessories/gloves.jpg") },
        { name: "Unisex Indian Army Belt Push buckle (Free Size/Adjustable)", price: 211, image: require("../assets/shop/accessories/belt.jpg") },
        { name: "Unisex Cotton Cap,Indian Army Cap with Adjustable Back Strip(Army Cap) Green", price: 200, image: require("../assets/shop/accessories/cap.jpg") },
        // Add other accessories here...
    ];

    const handleProductClick = (product) => setSelectedProduct(product);
    const handleBuyNowClick = (product) => {
        setSelectedProduct(product);
        setShowPayment(true);
    };
    const closePopup = () => setSelectedProduct(null);
    const closePayment = () => setShowPayment(false);

    return (
        <div>
            <h1 className='StoreHeading'>The Defender's Depot</h1>
            <p className='StorePara'>Gear up with essentials that embody the strength of our soldiers.</p>

            <h2>Books</h2>
            <div className="product-section">
                {books.map((book, index) => (
                    <ProductCard
                        key={index}
                        product={book}
                        onProductClick={handleProductClick}
                        onBuyNowClick={handleBuyNowClick}
                    />
                ))}
            </div>

            <h2>Clothes</h2>
            <div className="product-section">
                {clothes.map((clothing, index) => (
                    <ProductCard
                        key={index}
                        product={clothing}
                        onProductClick={handleProductClick}
                        onBuyNowClick={handleBuyNowClick}
                    />
                ))}
            </div>

            <h2>Accessories</h2>
            <div className="product-section">
                {accessories.map((accessory, index) => (
                    <ProductCard
                        key={index}
                        product={accessory}
                        onProductClick={handleProductClick}
                        onBuyNowClick={handleBuyNowClick}
                    />
                ))}
            </div>

            {selectedProduct && (
                <ProductPopup product={selectedProduct} onClose={closePopup} />
            )}

            {showPayment && (
                <PaymentGateway product={selectedProduct} onClose={closePayment} />
            )}
        </div>
    );
};

export default Shop;
