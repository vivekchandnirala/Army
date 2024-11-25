import React from 'react';
import './WesternCommand.css'; // Import the CSS file for styling
import WC from '../assets/logos/cc.png'
import WCG from '../assets/logos/ccG.jpg'
import WC1 from '../assets/logos/cc1.jpg'
import WC2 from '../assets/logos/cc2.jpg'
import WC3 from '../assets/logos/cc3.jpg'
import WC4 from '../assets/logos/cc4.jpg'

// Main Component
const WesternCommand = () => {
    return (
        <div className="western-command">
            <h1>Central Command</h1>

            {/* About Western Command Section */}
            <div className="about-section">
                <div className="about-text">
                    <h2>About Central Command</h2>
                    <p>
                        Central Command, also known as Surya Command, was raised on 01 May 1963 at Lucknow, in the aftermath of the Chinese aggression of 1962, with an aim to guard the Central Sector on the Line of Actual Control. Lt Gen Kanwar Bahadur Singh was the first GOC-in-C of Central Command. The insignia in the formation sign of Central Command is ‘Surya’, the Sun. The ethos of Surya, the ‘Eye of the Universe’ and the most profound source of energy that sustains all life in Earth, lies in its centrality to everything.
                    </p>
                    <p>
                        From the borders with Tibet & Nepal to the shores of Bay of Bengal, the Central Army is spread centrally across eight states of Himachal Pradesh, Uttarakhand, Uttar Pradesh, Madhya Pradesh, Bihar, Jharkhand, Chattisgarh and Odisha. It shares its boundary with all other Commands of the Indian Army and is Central to Victory.
                    </p>
                    <p>
                        Over time, Surya Command has grown in size and stature. Today, the Command is operationally responsible for the defence of Central Sector along the LAC and International Border with Nepal stretching across the four states of Himachal Pradesh, Uttarakhand, Uttar Pradesh & Bihar. Surya Command is home to 13 Category ‘A’ Training establishments, 18 Regimental Centres and a large number of logistic establishments. Valour in operations and sensitivity in internal security duties while providing aid to civil authorities are the hallmarks of Surya Command. The distinctive flavour of Surya Command lies in the variety of terrain, military heritage, tourist and pilgrimage destinations that it offers.
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
                        Lieutenant General Anindya Sengupta, UYSM, AVSM, YSM, assumed the appointment of GOC-in-C Central Comd on 01 Jul 2024.
                    </p>
                    <p>
                        He was commissioned in 14th Battalion the Punjab Regiment in June 1987. The general officer is an alumnus of National Defence Academy, Indian Military Academy, Defence Services Staff College, Army War College, and National Defence College.
                    </p>
                    <p>
                        In a military career spanning more than 37 years, he has the distinction of holding key command and staff appointments, both in peace and field. The general officer has served on the Line of Actual Control at Arunachal Pradesh, Manipur, and Nagaland; on the Line of Control in Kashmir Valley; in Siachen Glacier; and on the Line of Actual Control in Eastern Ladakh.
                    </p>
                    <p>
                        He has been an instructor at the National Defence Academy, directing staff at Defence Services Staff College, Wellington; military observer in Congo; brigade major of an infantry brigade; director of force structuring at the Strategic Planning Directorate; brigadier staff duties at Staff Duties Directorate; additional director general of Complaint Advisory Board in Chief of Army Staff Secretariat; and director general of Strategic Planning.
                    </p>


                </div>
            </div>

            {/* History Section */}
            <div className="history-section">
                <h2>History of Central Command</h2>
                <h3>Second World War</h3>
                <p>
                    Central Command was first established in 1942 during World War II and then disbanded in 1946.Southern Command was responsible for most of the training activities for Indian Army until Central Command was formed in April 1942 which took over the responsibility of some of the training areas.
                </p>
                <h3>Post 1962 Indo-China war</h3>
                <p>
                    With its HQ at Lucknow the Command was re-established on 1 May 1963 due to the Sino-Indian War of 1962. Lt Gen K Bahadur Singh was the first Army Commander of the new Central Command. Prior to that date Lucknow had been the headquarters of the Eastern Command.
                </p>
                <h3>Humanitarian assistance and flood relief operations</h3>
                <p>
                    Central Command undertook humanitarian and Flood Relief Operations at various locations during flash floods including Delhi and Kinnaur (Himachal Pradesh).
                </p>

            </div>

            {/* Gallery Section */}
            <div className="gallery-section">
                <h2>Photos and Snippets Central Command</h2>
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
