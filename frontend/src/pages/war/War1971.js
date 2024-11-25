import React from 'react';
import './War1971.css';

// Import images
import mainImage from '../../assets/war/1971_main.jpg';
import backgroundImage from '../../assets/war/1971_background.jpg';
import conflictImage from '../../assets/war/1971_conflict.jpg';
import battleImage from '../../assets/war/1971_battle.jpg';
import strategyImage from '../../assets/war/1971_strategy.jpg';
import outcomeImage from '../../assets/war/1971_outcome.jpg';
import timelineImage from '../../assets/war/1971_timeline.jpg';

const War1971 = () => {
    return (
        <div className="war-page">
            {/* Main Heading and Main Photo */}
            <h1 className="main-heading">The 1971 India-Pakistan War</h1>
            <img src={mainImage} alt="1971 War Image" className="main-image" />

            {/* Background Section */}
            <section className="war-section">
                <h2>Background</h2>
                <div className="content-wrapper">
                    <img src={backgroundImage} alt="Background of 1971 War" className="section-image" />
                    <p>
                        The 1971 India-Pakistan War, also known as the Bangladesh Liberation War, marked one of the most significant
                        conflicts in South Asian history. It was rooted in East Pakistan’s struggle for independence, which escalated
                        after Pakistan launched Operation Searchlight against Bengali nationalists. The widespread atrocities and
                        humanitarian crisis led millions to seek refuge in India, straining India's resources. India's support for
                        East Pakistan's independence movement increased tensions with Pakistan, setting the stage for the war.
                    </p>
                </div>
            </section>

            {/* Reason for Conflict Section */}
            <section className="war-section">
                <h2>Reason for Conflict</h2>
                <div className="content-wrapper reverse">
                    <p>
                        The war originated from the political, economic, and linguistic discrimination against the Bengali population
                        in East Pakistan. Calls for autonomy led to widespread protests, which Pakistan responded to with military
                        action, intensifying the conflict. India, deeply affected by the refugee influx and sympathizing with the
                        Bengali cause, ultimately intervened. This intervention culminated in a formal declaration of war after
                        Pakistan launched preemptive airstrikes on Indian airbases on December 3, 1971.
                    </p>
                    <img src={conflictImage} alt="Reason for 1971 Conflict" className="section-image" />
                </div>
            </section>

            {/* Major Battles and Strategies Section */}
            <section className="war-section">
                <h2>Major Battles and Strategies</h2>
                <div className="content-wrapper">
                    <img src={battleImage} alt="Major Battles of 1971 War" className="section-image" />
                    <p>
                        India adopted a coordinated three-front strategy, attacking on the eastern, western, and southern sectors.
                        The Battle of Longewala, where a small Indian infantry battalion successfully held off a large Pakistani
                        armored assault, became legendary. Meanwhile, Indian forces quickly advanced into East Pakistan, with the
                        Mukti Bahini (Bangladesh Liberation Army) providing crucial support. Naval operations were decisive, with
                        the Indian Navy launching successful attacks on Karachi's port, crippling Pakistan's western fleet.
                    </p>
                </div>
                <div className="content-wrapper">
                    <img src={strategyImage} alt="Strategies of 1971 War" className="section-image" />
                    <p>
                        The Indian military, led by General Sam Manekshaw, executed a swift campaign that overwhelmed Pakistani
                        forces in East Pakistan. The strategy focused on isolating Dhaka and disrupting Pakistan's command
                        structure, leading to a swift and effective surrender. India's air superiority also played a vital role,
                        with airstrikes targeting key Pakistani positions and supply lines, accelerating the victory in just
                        13 days.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="war-section">
                <h2>Timeline of Key Events</h2>
                <div className="timeline">
                    <img src={timelineImage} alt="Timeline of 1971 War" className="timeline-image" />
                    <ul>
                        <li><strong>March 26, 1971:</strong> Independence of Bangladesh declared by Sheikh Mujibur Rahman.</li>
                        <li><strong>December 3, 1971:</strong> Pakistan launches preemptive airstrikes on Indian airbases.</li>
                        <li><strong>December 4-6, 1971:</strong> Indian Navy conducts Operation Trident and Operation Python, crippling Pakistan’s Karachi port.</li>
                        <li><strong>December 9-10, 1971:</strong> Indian forces secure strategic points in East Pakistan.</li>
                        <li><strong>December 13, 1971:</strong> Indian troops surround Dhaka, the capital of East Pakistan.</li>
                        <li><strong>December 16, 1971:</strong> Pakistani forces in East Pakistan surrender; Bangladesh is liberated.</li>
                    </ul>
                </div>
            </section>

            {/* Outcome and Conclusion Section */}
            <section className="war-section">
                <h2>Outcome and Conclusion</h2>
                <div className="content-wrapper reverse">
                    <p>
                        The 1971 war ended with a decisive Indian victory, leading to the creation of Bangladesh as an independent nation.
                        Pakistan’s military was dealt a significant blow, with over 90,000 Pakistani soldiers taken as prisoners of war.
                        This conflict highlighted India's military capabilities and strengthened its position in the region. The war
                        also underscored the humanitarian commitment of India to support oppressed populations and emphasized the importance
                        of diplomatic and military coordination.
                    </p>
                    <img src={outcomeImage} alt="Conclusion of 1971 War" className="section-image" />
                </div>
            </section>
        </div>
    );
};

export default War1971;
