import React from 'react';
import './WesternCommand.css'; // Import the CSS file for styling
import WC from '../assets/logos/wc.png'
import WCG from '../assets/logos/wcG.jpg'
import WC1 from '../assets/logos/wc1.jpg'
import WC2 from '../assets/logos/wc2.jpg'
import WC3 from '../assets/logos/wc3.jpg'
import WC4 from '../assets/logos/wc4.jpg'

// Main Component
const WesternCommand = () => {
    return (
        <div className="western-command">
            <h1>Western Command</h1>

            {/* About Western Command Section */}
            <div className="about-section">
                <div className="about-text">
                    <h2>About Western Command</h2>
                    <p>
                        The first Army Command of Independent India, the Chandimandir - based Western Command stands committed to its credo ‘Ever Westwards’. Raised on 15 September 1947 as Delhi and East Punjab Command, its first operational task was to aid the civil administration in the safe transit of refugees in the post-partition scenario. Redesignated as the Western Command in January 1948, its brave officers and soldiers covered themselves in glory, paid for in blood, earning several accolades including the first Param Vir Chakra of India. Western Command stands ready to shoulder any responsibility, be it National Security, Aid to Civil Authorities or Nation Building.
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
                        Lieutenant General Manoj Kumar Katiyar, AVSM is a serving general officer of the Indian Army. He currently serves as the General Officer Commanding-in-Chief Western Command. He earlier served as the Director General of Military Operations (DGMO) at IHQ of MoD (Army), prior to that he was General Officer Commanding I Corps. He is also the Colonel of the Rajput Regiment since 1 February 2022
                    </p>
                    <p>
                        He was commissioned into the 23th battalion of the Rajput Regiment in June 1986 from the Indian Military Academy, Dehradun. In a distinguished career spanning over 37 years he has served across vivid terrains and has undertaken many staff and instructional appointments. He has served in Siachen Glacier, along LC both in 15 & 16 Corps and along LAC in 3, 14 and 33 Corps. He commanded his battalion twice; in Uri Sect and at Taksing in Western RALP. He commanded an Infantry Brigade along Western Borders, Army HQ Res Mountain Division along Northern Borders. He has been an instructor in Indian Military Training Team in Bhutan and a Directing Staff at Defence Services Staff College. The general officers' staff appointments include a Grade 1 post in Military Operations Directorate, Brigadier General Staff appointments in HQ Corps and in HQ Central Command and Director General of Staff Duties at IHQ of MoD (Army), New Delhi.
                    </p>
                </div>
            </div>

            {/* History Section */}
            <div className="history-section">
                <h2>History of Western Command</h2>
                <h3>Pre-Independence</h3>
                <p>
                    The Presidency armies were abolished with effect from 1 April 1895 when the three Presidency armies of Bengal, Bombay, and Madras became the Indian Army. The Indian Army was divided into four Commands: Bengal Command, Bombay Command, Madras Command and Punjab Command, each under a lieutenant general.
                </p>
                <p>
                    Between 1904 and 1908, the Bombay Command was renamed as the Western Command. In 1908, the four commands were merged into two Armies: Northern Army and Southern Army as recommended by then Commander-in-Chief, Indian Army Lord Kitchener. This system persisted until 1920 when the arrangement reverted to four commands again: Eastern Command, Northern Command, Southern Command and Western Command.
                </p>
                <p>
                    In 1937, Western Command was downgraded to become the Western Independent District commanded by a major general. In April 1942, the Western Independent District was absorbed in the Northern Command which itself was re-designated as North Western Army.
                </p>
                <h3>Re-raising</h3>
                <p>
                    After the partition of India, the erstwhile command HQ, Northern Command, went to Pakistan and was renamed as GHQ, Pakistan. The communal violence of partition necessitated the raising of a new command headquarters to relieve Army Headquarters of the day to day overseeing of operations of the two independent areas in north India.
                </p>
                <p>
                    This command, initially named Delhi and East Punjab Command was raised in Delhi on 14 September 1947 with Lt Gen Sir Dudley Russell as its commander. It was responsible to administer the Delhi Independent Area and the East Punjab Independent Area.
                </p>
                <p>
                    On 26 October 1947, following the accession of Jammu and Kashmir to India, Western Command was put in charge of all Indian Army operations to secure the area for India.
                </p>
                <p>
                    Initially a division sized force Jammu and Kashmir Division was raised on 5 November 1947 under Maj Gen Kulwant Singh for overseeing operations in Jammu and Kashmir.This was later split into two parts Jammu Division (under Maj Gen Atma Singh) and Srinagar Division (under Maj Gen K.S. Thimayya) to oversee operations in Jammu and Kashmir respectively.
                </p>
                <p>
                    The II Corps (Ambala), IX Corps (Yol), XI Corps (Jalandhar) and 40th Artillery Division (Ambala) are control operational units in Western Command.
                </p>
            </div>

            {/* Gallery Section */}
            <div className="gallery-section">
                <h2>Photos and Snippets Western Command</h2>
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
