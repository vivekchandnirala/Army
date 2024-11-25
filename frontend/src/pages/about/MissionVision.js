import React from 'react';
import './MissionVision.css'; // Import the CSS file for styling

// Image imports for the Mission of Indian Army
import Photo1 from '../../assets/about/mission1.jpeg';
import Photo2 from '../../assets/about/mission2.jpeg';
import Photo3 from '../../assets/about/mission3.jpeg';

// Image imports for the Vision of Indian Army
import Photo4 from '../../assets/about/vision1.jpg';
import Photo5 from '../../assets/about/vision2.jpg';
import Photo6 from '../../assets/about/vision3.jpg';

const MissionVision = () => {
    return (
        <div>
            {/* Mission Section */}
            <div className="army-mission">
                <h1 className="army-heading">Mission of Indian Army</h1>
                <p className="army-content">
                    The "Aim" of the Indian Army embodies a commitment to safeguarding the nation's sovereignty and ensuring internal stability. The Indian Army's aim is to maintain a strong defense posture to deter and respond to external aggression, ensure national unity, and foster peace and security across the country's diverse social-cultural landscape.
                </p>
                <p>
                    Key objectives include:
                </p>
                <ul className='armyMission'>
                    <li><b>Protection of National Sovereignty:</b> To guard the nation's territorial integrity and sovereignty against external threats and aggression.</li>
                    <li><b>Internal Security and Stability:</b> To assist in maintaining internal peace, stability, and law and order when called upon.</li>
                    <li><b>Humanitarian and Disaster Relief Operations:</b> To aid civil authorities during natural disasters, rescue operations, and other emergencies.</li>
                    <li><b>Youth Empowerment and National Pride:</b> To instill a spirit of patriotism, unity, and selfless service within the youth, motivating them to contribute positively to society.</li>
                </ul>
                <p>
                    In essence, the Indian Army aims to be a professional, disciplined, and resilient force, prepared to meet both traditional and emerging challenges in service to the nation.</p>
                <p>
                    The Army’s values also encourage young Indians to pursue excellence in leadership and embody ideals of courage, integrity, and national pride, echoing a call for national unity and collective progress.
                </p>

                <div className="army-gallery">
                    <div className="p1">
                        <div className="photo">
                            <img src={Photo1} alt="Cadets at Rajpath, New Delhi" />
                            <p>Urban Warfare</p>
                        </div>
                    </div>
                    <div className="p1">
                        <div className="photo">
                            <img src={Photo2} alt="PM Modi at NCC Rally" />
                            <p>Yudh Abhyas</p>
                        </div>
                    </div>
                    <div className="p1">
                        <div className="photo">
                            <img src={Photo3} alt="NCC Motto" />
                            <p>Weapons used by the Indian Army</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="army-vision">
                <h1 className="army-heading">Vision of Indian Army</h1>
                <p className="army-content">
                    The "Vision of the Indian Army" reflects a forward-thinking approach focused on enhancing capabilities to protect national interests in an evolving global and regional security environment. The vision is centered around several key aspects:
                </p>

                <ul className='armyMission'>
                    <li><b>Modernization and Technological Advancement:</b> To continuously upgrade and integrate advanced technologies, ensuring a modern, responsive, and agile force that is capable of addressing both conventional and asymmetric threats.</li>
                    <li><b>Operational Readiness and Resilience:</b> To maintain high levels of preparedness, readiness, and adaptability, ensuring rapid deployment and response capabilities to safeguard India’s borders and strategic interests.</li>
                    <li><b>Professionalism and Ethical Leadership:</b> To uphold the highest standards of military professionalism, integrity, and ethical conduct, fostering a culture of honor, discipline, and commitment to service.</li>
                    <li><b>Humanitarian Assistance and Disaster Relief:</b> To expand the Army's role in providing humanitarian aid and disaster relief, both within India and in international missions, thus promoting peace and goodwill.</li>
                    <li><b>Youth Empowerment and Nation-Building:</b> To inspire and engage the youth through initiatives that foster patriotism, leadership, and service-oriented mindsets, helping build a strong foundation of future leaders committed to national unity.</li>
                </ul>

                <div className="army-gallery">
                    <div className="p1">
                        <div className="photo">
                            <img src={Photo4} alt="Kneeling Position" />
                            <p>Buddyship</p>
                        </div>
                    </div>
                    <div className="p1">

                        <div className="photo">
                            <img src={Photo5} alt="Guard of Honour" />
                            <p>Border Security</p>
                        </div>
                    </div>
                    <div className="p1">
                        <div className="photo">
                            <img src={Photo6} alt="LPU-NCC Cadets" />
                            <p>Indian Army – Defence.Capital</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;
