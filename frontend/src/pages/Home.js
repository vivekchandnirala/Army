import React from 'react';
import SlideShow from '../components/Slideshow';
import ArmyInfoCard from '../components/ArmyInfoCard';
import NotificationBar from '../components/NotificationBar';
import Aim from '../components/Aim';
import RankInsignia from '../components/RankInsignia';
import Command from '../components/Command';

const Home = () => {
    return (
        <div>
            <SlideShow />
            <NotificationBar />
            {/* <h2>Welcome to the Indian ARMY Portal</h2> */}
            <Aim />
            <ArmyInfoCard />
            {/* <RankStructure /> */}
            <RankInsignia />
            <Command />

        </div>
    );
};

export default Home;
