import React from "react";
import './RankInsignia.css'; // Import the CSS file for styles

// Import Officer rank images
import FieldMarshal from '../assets/ranks/officer/field_marshal.png';
import General from '../assets/ranks/officer/general.png';
import LieutenantGeneral from '../assets/ranks/officer/lieutenant_general.png';
import MajorGeneral from '../assets/ranks/officer/major_general.png';
import Brigadier from '../assets/ranks/officer/brigadier.png';
import Colonel from '../assets/ranks/officer/colonel.png';
import LieutenantColonel from '../assets/ranks/officer/lieutenant_colonel.png';
import Major from '../assets/ranks/officer/major.png';
import Captain from '../assets/ranks/officer/captain.png';
import Lieutenant from '../assets/ranks/officer/lieutenant.png';

// Import JCO rank images
import SubedarMajor from '../assets/ranks/jco/subedar_major.png';
import Subedar from '../assets/ranks/jco/subedar.png';
import NaibSubedar from '../assets/ranks/jco/naib_subedar.png';

// Import NCO rank images
import Havildar from '../assets/ranks/nco/havildar.png';
import Naik from '../assets/ranks/nco/naik.png';
import LanceNaik from '../assets/ranks/nco/lance_naik.png';
import SepoyRank from '../assets/ranks/nco/sepoyrank.jpeg';

const RankInsignia = () => {
    return (
        <div className="rank-insignia-container">
            <h2>Rank and Insignia of Indian Army</h2>

            {/* First Row for Officer Rank */}
            <div className="rank-row">
                <div className="rank-title">Officer Rank</div>
                <div className="rank-image">
                    <img src={FieldMarshal} alt="Field Marshal" />
                    <div className="rank-name">Field Marshal</div>
                </div>
                <div className="rank-image">
                    <img src={General} alt="General" />
                    <div className="rank-name">General</div>
                </div>
                <div className="rank-image">
                    <img src={LieutenantGeneral} alt="Lieutenant General" />
                    <div className="rank-name">Lieutenant General</div>
                </div>
                <div className="rank-image">
                    <img src={MajorGeneral} alt="Major General" />
                    <div className="rank-name">Major General</div>
                </div>
                <div className="rank-image">
                    <img src={Brigadier} alt="Brigadier" />
                    <div className="rank-name">Brigadier</div>
                </div>
                <div className="rank-image">
                    <img src={Colonel} alt="Colonel" />
                    <div className="rank-name">Colonel</div>
                </div>
                <div className="rank-image">
                    <img src={LieutenantColonel} alt="Lieutenant Colonel" />
                    <div className="rank-name">Lieutenant Colonel</div>
                </div>
                <div className="rank-image">
                    <img src={Major} alt="Major" />
                    <div className="rank-name">Major</div>
                </div>
                <div className="rank-image">
                    <img src={Captain} alt="Captain" />
                    <div className="rank-name">Captain</div>
                </div>
                <div className="rank-image">
                    <img src={Lieutenant} alt="Lieutenant" />
                    <div className="rank-name">Lieutenant</div>
                </div>
            </div>

            {/* Second Row for JCO and NCO Ranks */}
            <div className="rank-row">
                <div className="rank-image"></div> {/* Empty box for alignment */}
                <div className="rank-title">JCO Rank</div>
                <div className="rank-image">
                    <img src={SubedarMajor} alt="Subedar Major" />
                    <div className="rank-name">Subedar Major</div>
                </div>
                <div className="rank-image">
                    <img src={Subedar} alt="Subedar" />
                    <div className="rank-name">Subedar</div>
                </div>
                <div className="rank-image">
                    <img src={NaibSubedar} alt="Naib Subedar" />
                    <div className="rank-name">Naib Subedar</div>
                </div>
                <div className="rank-title">NCO Rank</div>
                <div className="rank-image">
                    <img src={Havildar} alt="Havildar" />
                    <div className="rank-name">Havildar</div>
                </div>
                <div className="rank-image">
                    <img src={Naik} alt="Naik" />
                    <div className="rank-name">Naik</div>
                </div>
                <div className="rank-image">
                    <img src={LanceNaik} alt="Lance Naik" />
                    <div className="rank-name">Lance Naik</div>
                </div>
                <div className="rank-image">
                    <img src={SepoyRank} alt="Sepoy" />
                    <div className="rank-name">Sepoy</div>
                </div>
                <div className="rank-image"></div> {/* Empty box for alignment */}
            </div>
        </div>
    );
}

export default RankInsignia;
