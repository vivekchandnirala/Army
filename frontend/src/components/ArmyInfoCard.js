// src/components/ArmyInfoCard.js
import React from 'react';
import './ArmyInfoCard.css';
import VicechiefImage from '../assets/VCOAS.jpg';

const ArmyInfoCard = () => {
    return (
        <div className="aim-division">
            <div className="army-info-left">
                <h2>About the Indian Army</h2>
                <p>
                    The Indian Army is the land-based branch and largest component of the Indian Armed Forces, with a long-standing legacy of bravery, dedication, and patriotism. The President of India serves as the Supreme Commander of the Indian Army, while it is operationally commanded by the Chief of Army Staff (COAS), who oversees its diverse operations. The Army's core mission is to maintain national security, defending India against external threats, and securing its borders.
                </p>
                <p>
                    In addition to its primary mission, the Indian Army plays a vital role in humanitarian and disaster relief operations. When natural disasters like floods, earthquakes, or cyclones strike, the Army is among the first to respond, conducting rescue operations and offering aid. It also assists in maintaining internal security, supporting the government in managing civil unrest and aiding local administrations when needed.
                </p>
                <p>
                    Structured into various corps and regiments, the Indian Army has specialized divisions, including infantry, artillery, armored units, and engineering services. This well-organized structure allows the Army to perform across diverse terrains—from the high altitudes of the Himalayas to desert and jungle environments. The Indian Army's professionalism and dedication have earned it deep respect, both nationally and globally.
                </p>
            </div>
            <div className="right-content-vice">
                <div className="coas-header">
                    <h2>
                        Vice Chief of the Army Staff (VCOAS)</h2>
                </div>
                <div className="coas-body">
                    <img src={VicechiefImage} alt="Chief Of Army Staff" className="coas-photo" />
                    <div className="coas-content">
                        <p><b>Lieutenant General N. S. Raja Subramani, PVSM, AVSM, SM, VSM</b>
                            <br /><br />Lieutenant General N. S. Raja Subramani, PVSM, AVSM, SM, VSM, was commissioned into the Indian Army in 1984, joining the prestigious Armoured Corps. An alumnus of the National Defence Academy, Khadakwasla, and the Indian Military Academy, Dehradun, General Subramani has a distinguished career characterized by operational excellence and leadership in various critical assignments.
                            <br></br>With extensive experience in armored warfare, General Subramani has held numerous command and staff positions across diverse operational theaters, including command of a brigade during crucial counter-insurgency operations. Prior to his appointment as the Chief of Staff of the Eastern Command, he served in various significant roles, showcasing his strategic acumen and commitment to national security.
                        </p>
                        <a href="https://en.wikipedia.org/wiki/N._S._Raja_Subramani" className="read-more-button" target="blank">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ArmyInfoCard;
