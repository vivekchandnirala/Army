import React from 'react';
import './WesternCommand.css'; // Import the CSS file for styling
import WC from '../assets/logos/ec.png'
import WCG from '../assets/logos/ecG.jpeg'
import WC1 from '../assets/logos/ec1.jpg'
import WC2 from '../assets/logos/ec2.jpg'
import WC3 from '../assets/logos/ec3.jpg'
import WC4 from '../assets/logos/ec4.jpg'

// Main Component
const WesternCommand = () => {
    return (
        <div className="western-command">
            <h1>Eastern Command</h1>

            {/* About Western Command Section */}
            <div className="about-section">
                <div className="about-text">
                    <h2>About Eastern Command</h2>
                    <p>
                        The Eastern Command is one of the six operational commands of the Indian Army. It is headquartered in Fort William in the city of Kolkata in the state of West Bengal. The Eastern Command was formed on 1 November 1920.[1] The Command is commanded by a three-star rank officer with the title General Officer Commanding-in-Chief (GOC-in-C).
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
                        Lt Gen Ram Chander Tiwari, UYSM, AVSM, SM assumed the appointment of GOC-in-C, Eastern Comd on 01 Jan 2024.
                    </p>
                    <p>
                        An alumnus of National Defence Academy and Indian Military Academy, the General Officer was commissioned into KUMAON Regt on 13 June 1987. He has attended the Defence Services Staff College, Higher Defence Management Course and National Defence College, New Delhi. He is also a graduate of Swiss Army Chemical Warfare School and US Army Infantry School, Fort Benning, USA
                    </p>
                    <p>
                        In his 36 years of illustrious service, he has tenanted various Command and Staff appointments with a wide spectrum of operational, field and highly active Counter Insurgency profile.
                    </p>
                    <p>
                        The General Officer has served a Rashtriya Rifles Bn as 2IC, commanded his Battalion in active Counter Insurgency area of Assam (OP RHINO), commanded a Mountain Brigade in High Altitude Area of North Sikkim, wherein his distinguished professionalism was rewarded with Sena Medal. He commanded a Mountain Division along the LAC, wherein he was awarded Ati Vishisht Seva Medal.
                    </p>
                    <p>
                        The General Officer is also the Colonel of the KUMAON & NAGA Regiments and KUMAON SCOUTS.
                    </p>
                </div>
            </div>

            {/* History Section */}
            <div className="history-section">
                <h2>History of Eastern Command</h2>
                <h3>Early history</h3>
                <p>
                    The Presidency armies were abolished with effect from 1 April 1895 when the three Presidency armies of Bengal, Bombay, and Madras became the Indian Army. The Indian Army was divided into four Commands: Bengal Command, Bombay Command, Madras Command and Punjab Command, each under a lieutenant general.
                </p>
                <p>
                    Between 1904 and 1908, the Bengal Command became the Eastern Command. In 1908, the four commands were merged into two Armies – Northern Army and Southern Army – as recommended by the then Commander-in-Chief, Indian Army, Lord Kitchener. This system persisted until 1920 when the arrangement reverted to four commands again: Eastern Command, Northern Command, Southern Command and Western Command.
                </p>
                <p>
                    On 1 November 1920, the Eastern Command was formed, with its summer headquarters in Nainital and winter headquarters in Lucknow. General Sir Havelock Hudson, became its first Commander.
                </p>

                <h3>Second World War</h3>
                <p>
                    On 21 April 1942, the command was re-designated as Eastern Army. Its headquarters moved to Barrackpore to fight the World War II. The Chindits were raised and launched into operations in 1943, by the 77th Indian Infantry Brigade, a unit of the Eastern Command.
                </p>
                <p>
                    In October 1943, the Fourteenth Army was formed and was given responsibility of the area east of the Meghna River. With this, the Eastern Army retained responsibility of the area west of the river.
                </p>
                <p>
                    After the war, on 23 March 1947, the Command HQ moved to Ranchi. The HQ was later moved to Lucknow in 1955. However, on 1 May 1963, post the Sino-Indian War; the Central Command was re-raised and Lucknow was made its HQ, while Kolkata was made HQ Eastern Command.
                </p>
                <h3>Indo-Pakistani War of 1971</h3>
                <p>
                    The Command had the overall responsibility of the eastern theatre of the 13-day war. The command had the two existing infantry corps – IV Corps and XXXIII Corps and raised another – II Corps. Apart from this, the 101 Communication Zone was re-organised as a Division-sized combat formation. Lieutenant General J S Arora, as the General Officer Commanding-in-Chief Eastern Command, commanded all Indian and Bangladesh Forces in the eastern theatre.
                </p>
                <p>
                    On 16 December 1971, the Eastern Command of the Pakistan Armed Forces surrendered at Dhaka. East Pakistan ceased to exist and Bangladesh was born. Lt Gen J S Arora accepted the Pakistani Instrument of Surrender, signed by Lt Gen A. A. K. Niazi at Dacca Racecourse. Approximately 93,000 Pakistani servicemen were taken prisoner by the Indian Army, which included 79,676 to 81,000 uniformed personnel of the Pakistan Armed Forces, including some Bengali soldiers who had remained loyal to Pakistan.
                </p>

            </div>

            {/* Gallery Section */}
            <div className="gallery-section">
                <h2>Photos and Snippets Eastern Command</h2>
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
