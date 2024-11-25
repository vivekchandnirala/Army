import React from "react";
import { Link } from 'react-router-dom';
import './Aim.css';
import chiefImage from '../assets/chief_of_army.jpeg';

const Aim = () => {
    return (
        <div className="aim-division">
            <div className="left-content">
                <div className="sub-division aim-content">
                    <h2>Aim of Indian Army</h2>
                    <p>
                        The Aim of the Indian Army is to ensure the national security and unity of India, safeguarding the country from external threats and internal challenges. The Indian Army is dedicated to:
                    </p>
                    {/* Updated Link to point to MissionVision page */}
                    <Link to="/home/about/mission-vision" className="read-more-button">Read More</Link>
                </div>
                <div className="sub-division">
                    <h2>Pledge</h2>
                    <p>
                        "I, [Rank & Name], do solemnly swear that I will bear true faith and allegiance to the Constitution of India as by law established, and that I will, as in duty bound, honestly and faithfully serve in the regular Army of the Union of India and go wherever ordered, by land, sea, or air, and that I will observe and obey all commands of the President of the Union of India and the commands of any officer set over me, even to the peril of my life."
                    </p>
                </div>
            </div>

            <div className="right-content">
                <div className="coas-header">
                    <h2>Chief of Army Staff (COAS)</h2>
                </div>
                <div className="coas-body">
                    <img src={chiefImage} alt="Chief Of Army Staff" className="coas-photo" />
                    <div className="coas-content">
                        <p>
                            <b>General Upendra Dwivedi, PVSM AVSM ADC</b>
                            <br /><br />General Upendra Dwivedi, PVSM, AVSM, was commissioned into the Jammu and Kashmir Rifles in 1984. A distinguished alumnus of both the National Defence Academy, Khadakwasla, and the Indian Military Academy, Dehradun, General Dwivedi brings extensive operational experience and strategic acumen to his role. He took command as the 30th Chief of the Army Staff in June 2024, succeeding General Manoj Pande. Prior to this role, he served as the Vice Chief of Army Staff and as the General Officer Commanding-in-Chief of the Northern Command, overseeing critical operations along India's northern frontiers and counter-terror efforts in Jammu and Kashmir.
                        </p>
                        <a href="https://en.wikipedia.org/wiki/Upendra_Dwivedi" className="read-more-button" target="blank">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aim;
