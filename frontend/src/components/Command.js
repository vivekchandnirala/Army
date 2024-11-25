// src/components/Command.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Command.css';

// Import images
import South from '../assets/logos/sc.png';
import East from '../assets/logos/ec.png';
import West from '../assets/logos/wc.png';
import North from '../assets/logos/nc.png';
import SouthWest from '../assets/logos/swc.png';
import Central from '../assets/logos/cc.png';
import Training from '../assets/logos/artrac.png';

const Command = () => {
  return (
    <div className="command-container">
      <h2 className="command-heading">Commands of Indian Army</h2>
      <div className="container">
        <Link to="/home/southern-command" className="more-button">
          <div className="circle">
            <img src={South} alt="South Command" />
          </div>
          <div className="label">South Command</div>
        </Link>

        <Link to="/home/eastern-command" className="more-button">
          <div className="circle">
            <img src={East} alt="East Command" />
          </div>
          <div className="label">East Command</div>
        </Link>

        <Link to="/home/northern-command" className="more-button">
          <div className="circle">
            <img src={North} alt="North Command" />
          </div>
          <div className="label">North Command</div>
        </Link>

        <Link to="/home/western-command" className="more-button">
          <div className="circle">
            <img src={West} alt="Western Command" />
          </div>
          <div className="label">Western Command</div>
        </Link>

        <Link to="/home/central-command" className="more-button">
          <div className="circle">
            <img src={Central} alt="Central Command" />
          </div>
          <div className="label">Central Command</div>
        </Link>

        <Link to="/home/south-west-command" className="more-button">
          <div className="circle">
            <img src={SouthWest} alt="South-West Command" />
          </div>
          <div className="label">South-West Command</div>
        </Link>

        <Link to="/home/training-command" className="more-button">
          <div className="circle">
            <img src={Training} alt="Training Command" />
          </div>
          <div className="label">Training Command</div>
        </Link>
      </div>
    </div>
  );
};

export default Command;
