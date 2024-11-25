import React, { createContext, useState } from 'react';

export const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState(18);

    const increaseFontSize = () => setFontSize((prev) => prev + 2);
    const decreaseFontSize = () => setFontSize((prev) => (prev > 10 ? prev - 2 : prev));
    const resetFontSize = () => setFontSize(18);

    return (
        <FontSizeContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize, resetFontSize }}>
            {children}
        </FontSizeContext.Provider>
    );
};
