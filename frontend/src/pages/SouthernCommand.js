import React from 'react';
import './WesternCommand.css';
import WC from '../assets/logos/sc.png'
import WCG from '../assets/logos/scG.jpg'
import WC1 from '../assets/logos/sc1.jpg'
import WC2 from '../assets/logos/sc2.jpg'
import WC3 from '../assets/logos/sc3.jpg'
import WC4 from '../assets/logos/sc4.jpg'

// Main Component
const WesternCommand = () => {
    return (
        <div className="western-command">
            <h1>Southern Command</h1>

            {/* About Western Command Section */}
            <div className="about-section">
                <div className="about-text">
                    <h2>About Southern Command</h2>
                    <p>
                        Southern Command is a formation of the Indian Army, active since 1895. It has seen action during the integration of several Princely States into modern India, during the 1961 Indian liberation of Goa, and during the 1965 and 1971 Indo-Pakistani Wars. Lieutenant General Dhiraj Seth is the present Southern Army Commander.
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
                        Lieutenant General Dhiraj Seth, AVSM is a serving general officer of the Indian Army. He currently serves as General Officer Commanding-in-Chief Southern Command.He was previously tenanting the appointment of General Officer Commanding-in-Chief South Western Command.He earlier held the appointment of General Officer commanding Delhi Area, prior to that he was General Officer Commanding XXI Corps.
                    </p>
                    <p>
                        The general officer was commissioned into the 2nd Lancers (Gardner's Horse) on 20 December 1986 from the Indian Military Academy. He was awarded the ‘Silver Centurion’ in the Young Officers Course, he stood first in the order of merit in several courses he attended, including the Junior Command Course. He has commanded the Skinner's Horse, 98 Armoured Brigade and was General Officer Commanding (GOC) of a Rashtriya Rifles force in Jammu & Kashmir. He has served as brigade major of an independent armoured brigade, as Assistant Military Secretary in the Military Secretary Branch and as Brigadier General Staff (Operations) of the South Western Command. Gen Seth also served as an instructor and assistant adjutant at the National Defence Academy (NDA), and as an instructor at the School of Armoured Warfare, Ahmednagar. In 1995–1996, he served with the United Nations Angola Verification Mission III as operations officer.
                    </p>
                </div>
            </div>

            {/* History Section */}
            <div className="history-section">
                <h2>History of Southern Command</h2>
                <h3>Early history</h3>
                <p>
                    The Presidency armies were abolished with effect from 1 April 1895 when the three Presidency armies became the Indian Army. The Indian Army was divided into four Commands (Bengal Command, Bombay Command, Madras Command and Punjab Command) each under a lieutenant general
                </p>
                <p>
                    In 1908, the four commands were merged into two Armies (Northern Army and Southern Army): this system persisted until 1920 when the arrangement reverted to four commands again (Eastern Command, Northern Command, Southern Command and Western Command). In 1914, the Southern Army consisted of the 4th (Quetta) Division, the 5th (Mhow) Division, the 6th (Poona) Division, the 9th (Secunderabad) Division, and the Aden Brigade.
                </p>

                <h3>Second World War</h3>
                <p>
                    During the Second World War, Southern Command was reformed as Southern Army (equivalent to a corps) in April 1942. The formation reverted to the title Southern Command in November 1945.
                </p>
                <h3>Post war</h3>
                <p>
                    In August 1947, Southern Command had the Deccan, Madras and Bombay Areas (with HQs at Kamptee, Madras and Bombay). In 1947–48, Southern Command was largely responsible in getting Junagadh and Hyderabad to sign the instrument of accession to India. 1st Armoured Division did the actual incursion into Hyderabad. In 1961, the Indian annexation of Goa was conducted by 17th Infantry Division and 50th Parachute Brigade, under the operational control of Southern Command.
                </p>
                <p>
                    In 1965–66, two further divisions were raised within the command. After fighting broke out in the Rann of Kutch in April 1965, a hastily constituted force, named Kilo Force under Maj. Gen P. O. Dunn was formed to contain this attack. Kilo Force was later re-designated as 11 Infantry Division. In September 1965, the operational responsibility for the Barmer sector was given to Southern Command and entrusted to 11 Infantry Division. Delhi and Rajasthan Area, with its Advance Headquarters at Jodhpur, fought in the Indo-Pakistani War of 1965 under Western Command. On 3 November 1966, this formation was re-designated 12th Infantry Division, under Major General J.F.R. Jacob, and also placed under Southern Command
                </p>

            </div>

            {/* Gallery Section */}
            <div className="gallery-section">
                <h2>Photos and Snippets Southern Command</h2>
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
