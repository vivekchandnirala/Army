// src/components/LogoSection.js
import React from 'react';
import './LogoSection.css';
import armedForcesLogo from '../assets/logos/armed_forces_logo.png';
import armyLogo from '../assets/logos/army_logo.png';
// import navyLogo from '../assets/logos/navy_logo.png';
// import airForceLogo from '../assets/logos/air_force_logo.png';

function LogoSection() {
    return (
        <div className="logo-section">
            <div className="left-logo">
                <img src={armedForcesLogo} alt="Indian Armed Forces" />
            </div>
            <center><h1 className='a'>INDIAN ARMY</h1></center>
            <div className="right-logos">
                <img src={armyLogo} alt="Army" className="branch-logo" />
                {/* <img src={navyLogo} alt="Navy" className="branch-logo" /> */}
                {/* <img src={airForceLogo} alt="Air Force" className="branch-logo" /> */}
            </div>
        </div>
    );
}

export default LogoSection;
