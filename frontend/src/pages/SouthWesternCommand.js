import React from 'react';
import './WesternCommand.css'; // Import the CSS file for styling
import WC from '../assets/logos/swc.png'
import WCG from '../assets/logos/swcG.jpg'
import WC1 from '../assets/logos/swc1.jpg'
import WC2 from '../assets/logos/swc2.jpg'
import WC3 from '../assets/logos/swc3.jpg'
import WC4 from '../assets/logos/swc4.jpg'

// Main Component
const WesternCommand = () => {
    return (
        <div className="western-command">
            <h1>South Western Command</h1>

            {/* About Western Command Section */}
            <div className="about-section">
                <div className="about-text">
                    <h2>About South Western Command</h2>
                    <p>
                        The South Western Command was formally raised on 15 April 2005 and Operationalised on 15 August 2005 at ‘Gothic Lines’ at Jaipur Military Station, with the customary Raising Ceremony and hoisting of the Command Flag by the General Officer Commanding-in-Chief.
                    </p>
                    <p>
                        The Command insignia depicts the core aspects of the essence. A silver streak, symbolising strike action, Command and Information Warfare superimposed with a seven pointed star, heralding the Seventh Command and with it, assured victory.
                    </p>
                </div>
                <div className="logo">
                    <img src={WC} alt="Western Command Logo" />
                </div>
            </div>

            {/* Commanding in Chief Section */}
            <div className="commander-section">
                <div className="commander-photo">
                    <img
                        src={WCG}
                        alt="Commanding in Chief of Western Command"
                    />
                </div>
                <div className="commander-info">
                    <h2>Commanding in Chief</h2>
                    <p>
                        Lieutenant General Manjinder Singh, AVSM, YSM, VSM took over the reins of Jaipur based Sapta Shakti Command on 01 July 24.</p>
                    <p>
                        Lieutenant General Manjinder Singh, AVSM, YSM, VSM was commissioned into 18 MADRAS in December 1986. The General Officer is an alumnus of Sainik School Kapurthala, National Defence Academy, Khadakwasla and Indian Military Academy, Dehradun. His illustrious career profile includes attending the Defence Services Staff College, Higher Command Course and the distinction of attending National Defence College at Thailand.</p>
                    <p>
                        In his distinguished military career spanning over 38 years, he has tenanted numerous important and challenging command and staff appointments in Jammu & Kashmir and at the Western Front.
                    </p>
                    <p>
                        For his exemplary leadership and devotion to duty towards the Nation, the General Officer was awarded with Yudh Seva Medal in 2015, Vishist Seva Medal in 2019 and Ati Vishist Seva Medal in 2024.
                    </p>
                    <p>
                        The General Officer is the COLONEL of THE MADRAS REGIMENT since 01 Jan 2021. He was the Deputy Chief of Integrated Defence Staff (Policy Planning & Force Development) prior to taking over as the General Officer Commanding-in-Chief of the Shimla based Army Training Command on 01 Dec 2023.
                    </p>
                </div>
            </div>

            {/* History Section */}
            <div className="history-section">
                <h2>Structure of Western Command</h2>

                <p>
                    Currently, the Western Command has been assigned operational units under:- X Corps and 42nd Artillery Division. The command in total has following units under its belt :- 3 infantry divisions (1 for Mountain warfare), 1 armoured division, 1 artillery division, 2 Reorganised Army Plains Infantry Division (RAPID), 1 armoured brigade, 1 Air-defence brigade, and 1 engineering brigade.                </p>

            </div>

            {/* Gallery Section */}
            <div className="gallery-section">
                <h2>Photos and Snippets South Western Command</h2>
                <div className="gallery-grid">
                    <img src={WC1} alt="Gallery Image 1" />
                    <img src={WC2} alt="Gallery Image 2" />
                    <img src={WC3} alt="Gallery Image 3" />
                    <img src={WC4} alt="Gallery Image 4" />
                    {/* Add more images as needed */}
                </div>
            </div>
        </div>
    );
};

export default WesternCommand;
