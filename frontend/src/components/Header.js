// src/components/Header.js
import React, { useContext } from 'react';
import { FontSizeContext } from '../FontSizeContext';
import './Header.css';

function Header() {
    const { increaseFontSize, decreaseFontSize, resetFontSize } = useContext(FontSizeContext);

    return (
        <header className="header">
            <div className="header-content">
                <div className="title">Ministry Of Defence</div>
                <div className="font-controls">
                    <button onClick={increaseFontSize} className="font-button">A+</button>
                    <button onClick={decreaseFontSize} className="font-button">A-</button>
                    <button onClick={resetFontSize} className="font-button">A</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
