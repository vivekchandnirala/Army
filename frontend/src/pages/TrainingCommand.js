import React from 'react';
import './WesternCommand.css'; // Import the CSS file for styling
import WC from '../assets/logos/artrac.png'
import WCG from '../assets/logos/artracG.png'
import WC1 from '../assets/logos/art1.jpeg'
import WC2 from '../assets/logos/art2.jpeg'
import WC3 from '../assets/logos/art3.jpeg'
import WC4 from '../assets/logos/art4.jpg'

// Main Component
const WesternCommand = () => {
    return (
        <div className="western-command">
            <h1>Army Training Command</h1>

            {/* About Western Command Section */}
            <div className="about-section">
                <div className="about-text">
                    <h2>About Army Training Command</h2>
                    <p>
                        The Army Training Command, abbreviated as ARTRAC, is one of the seven commands of the Indian Army. It is currently based at Shimla. It was established in 1991.
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
                        Lieutenant General Devendra Sharma, Ati Vishist Seva Medal, Sena Medal is an alumnus of Mayo College, Ajmer, National Defence Academy, Khadakwasla and the Indian Military Academy, Dehradun. Recipient of the coveted ‘Sword of Honour’, he was commissioned into ‘THE SCINDE HORSE’ on 19 December 1987. He is a graduate of the Defence Services Staff College, Wellington, College of Defence Management (CDM), Secunderabad and Indian Institute of Public Administration, New Delhi. While doing Higher Defence Management Course at CDM, he was awarded the ‘Chief of Army Staff Trophy’ for standing ‘First’ in overall order of merit.
                    </p>
                    <p>
                        The General Officer has tenanted several key instructional and staff appointments to include instructor at NDA, Khadakwasla, Brigade Major of an Armoured Brigade, Assistant Military Secretary at Military Secretary Branch, Colonel General Staff of an Armoured Division and Area Headquarters, Colonel Quartermaster of an Infantry Division on the Line of Control, Brigadier General Staff (Operations) of a Strike Corps and Major General General Staff (Operations) & later Chief of Staff of a Command Headquarters. In his foreign assignments, he was Staff Officer at HQ Indian Military Training Team and later the Chief Military Personnel Officer at MONUSCO (UN) in the Democratic Republic of Congo. </p>
                    <p>Lieutenant General Devendra Sharma, Ati Vishist Seva Medal, Sena Medal assumed the appointment of General Officer Commanding in Chief, Army Training Command on 01 July 2024.</p>
                </div>
            </div>

            {/* History Section */}
            <div className="history-section">
                <h2>History of Army Training Command</h2>

                <p>
                    The Army Training Command was established on 1 October 1991 at Mhow in Madhya Pradesh and moved to Shimla on 31 March 1993. The main aim of the command is to maximize effectiveness of the training.
                </p>
                <p>
                    In 2020, it was decided to merge the Directorate General of Military Training (DGMT) with ARTRAC. DGMT runs the Rashtriya Military Schools (RMS).
                </p>
                <h2>Objectives</h2>

                <p>
                    Its roles are to:
                </p>
                <ul>
                    <li>Formulate concepts and doctrines of warfare in the fields of strategy, operational art, tactics, logistics, training and human resource development stimulating a real-time scenario.</li>
                    <li>Acts as the nodal agency for all institutional training in the Army</li>
                    <li>Evolve joint doctrines in conjunction with other Services</li>
                </ul>

            </div>

            {/* Gallery Section */}
            <div className="gallery-section">
                <h2>Photos and Snippets Army Training Command</h2>
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
