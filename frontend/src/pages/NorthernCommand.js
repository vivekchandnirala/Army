import React from 'react';
import './WesternCommand.css'; // Import the CSS file for styling
import WC from '../assets/logos/nc.png'
import WCG from '../assets/logos/ncG.jpg'
import WC1 from '../assets/logos/nc1.jpg'
import WC2 from '../assets/logos/nc2.jpg'
import WC3 from '../assets/logos/nc3.jpg'
import WC4 from '../assets/logos/nc4.jpg'

// Main Component
const WesternCommand = () => {
    return (
        <div className="western-command">
            <h1>Northern Command</h1>

            {/* About Western Command Section */}
            <div className="about-section">
                <div className="about-text">
                    <h2>About Northern Command</h2>
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
                        Lieutenant General MV Suchindra Kumar, PVSM, AVSM, YSM, VSM, an alumnus of Sainik School, Bijapur and National Defence Academy, Khadakwasla was commissioned in First Battalion The ASSAM REGT in June 1985. The General Officer is a graduate of Defence Services Staff College, Wellington, attended the Higher Command Course at Army War College, Mhow and the National Defence College, New Delhi.
                    </p>
                    <p>
                        The General Officer has also attended courses on 'Cooperative Security in South Asia' in Sri Lanka, 'UN Senior Mission Leaders Course' in Egypt and has tenanted several key staff appointments as Brigadier General Staff in North East, as Deputy Director General CS, Quarter Master General Branch and Additional Director General, Military Intelligence (A) at Integrated Head Quarters of MoD (Army). He has also served as Director General Military Intelligence, Deputy Chief of Army Staff (Strategy) and the Vice Chief of Army Staff.
                    </p>
                    <p>
                        The General Officer has served as Instructor at various levels in the Infantry School Mhow and Indian Army Training Team in Lesotho. His command appointments were in varied field terrains to include a Rashtriya Rifles Battalion (ASSAM), an Infantry Brigade, Division and the prestigious White Knight Corps on the Line of Control (LoC). He has rich experience of both conventional and Counter Insurgency operations in Northern & Eastern theatres.
                    </p>
                    <p>
                        The General Officer had the privilege of assuming the mantle of the Colonel of the Assam Regt and Arunachal Scouts on 01 Mar 2021. He is married to Mrs Asha Suchindra, an educationist. He is an amateur long-distance runner, golf enthusiast and practices yoga regularly.
                    </p>
                </div>
            </div>

            {/* History Section */}
            <div className="history-section">
                <h2>History of Northern Command</h2>
                <p>
                    Prior to independence, Northern Command was located at Rawalpindi and was responsible for defence of North West India. On partition, the Command Headquarter was allocated to Pakistan. In India, new Headquarter designated as Western Command was located at Shimla to oversee the defence of our Western and Northern borders with Pakistan and some portion of Indo-Tibet border.                </p>
                <p>
                    The need for a separate Headquarters in the North was felt as far back as the 1948 War. The cumulative experience of 1962, 1965 and 1971 wars reinforced the conviction that geo-strategically the Northern Theatre was too important to be effectively commanded by a Headquarter based as far away as Shimla. The need for creating a separate Northern Command, to meet the security needs was fulfilled on 17 June 1972 with initially two Corps under Command, which was later increased to four Corps, with ‘Strike One Corps’ being reorbatted to Northern Command to enhance the operation capability in Eastern Ladakh.                </p>
                <p>
                    The Command is responsible for an extremely sensitive region of India which includes UTs of J&K & Ladakh. Its first General Officer-in-Commanding was Lieutenant General PS Bhagat, VC, PVSM.  The present GOC-in-C, Lieutenant General Upendra Dwivedi, AVSM took over Northern Command on 01 Feb 2022.                </p>

                <p>
                    The Command Formation Sign consists of ‘Dhruva’ or the ‘North Star’ in the centre of Red & Black Command colour stripes. The Dhruva or North Star symbolizes the geographical North of the Command, since it is entrusted with the responsibility of safeguarding the Northern borders of our country. North Star draws its inspiration from Indian mythology where ‘Dhruva Star’ always denotes courage, steadfastness in battle and righteous cause.                </p>
                <p>
                    Northern Command has been in Operational mode since its very inception, having seen a large number of high and low intensity ops. Today, Northern Command is at the forefront of the Nation's efforts to counter the most serious challenge to her security, the scourge of terrorism and the vicious Proxy War in J&K. Thus, whether officially at peace or in operations, the troops of the Command have been always in combat.                </p>

            </div>

            {/* Gallery Section */}
            <div className="gallery-section">
                <h2>Photos and Snippets Northern Command</h2>
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
