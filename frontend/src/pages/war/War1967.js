// src/pages/war/War1967.js
import React from 'react';
import './War1967.css';

// Import images
import mainImage from '../../assets/war/1967_main.jpg';
import backgroundImage from '../../assets/war/1967_background.jpg';
import conflictImage from '../../assets/war/1967_conflict.jpg';
import battleImage from '../../assets/war/1967_battle.jpg';
import timelineImage from '../../assets/war/1967_timeline.jpg';
import outcomeImage from '../../assets/war/1967_outcome.jpg';

const War1967 = () => {
    return (
        <div className="war-page">
            {/* Main Heading and Main Photo */}
            <h1 className="main-heading">The 1967 War: India vs. China</h1>
            <img src={mainImage} alt="1967 War Main Image" className="main-image" />

            {/* Background Section */}
            <section className="war-section">
                <h2>Background</h2>
                <div className="content-wrapper">
                    <img src={backgroundImage} alt="Background of 1967 War" className="section-image" />
                    <p>
                        The 1967 conflict between India and China took place along the Sikkim border, particularly in the areas of
                        Nathu La and Cho La. After the 1962 Sino-Indian War, tensions remained high between the two countries. The 1967
                        clashes marked a significant shift, as it was one of the first times that Indian forces stood their ground and
                        retaliated effectively, showcasing their improved preparedness and morale.
                    </p>
                </div>
            </section>

            {/* Cause of the Conflict Section */}
            <section className="war-section">
                <h2>Cause of the Conflict</h2>
                <div className="content-wrapper reverse">
                    <p>
                        The conflict erupted when Chinese troops tried to encroach upon Indian territory near Nathu La. This attempt to
                        establish control over strategic heights was seen by India as a breach of sovereignty. The Indian Army resisted
                        and defended its positions, leading to intense skirmishes over a series of days. The clashes at Nathu La and Cho La
                        were seen as an assertion of India’s right to its territory.
                    </p>
                    <img src={conflictImage} alt="Cause of the Conflict" className="section-image" />
                </div>
            </section>

            {/* Key Battles and Skirmishes Section */}
            <section className="war-section">
                <h2>Key Battles and Skirmishes</h2>
                <div className="content-wrapper">
                    <img src={battleImage} alt="Battles of 1967 War" className="section-image" />
                    <p>
                        The major clashes occurred at two critical points: Nathu La and Cho La. The Battle of Nathu La began in early
                        September, with Indian soldiers responding to Chinese provocations. This escalated into a larger conflict with
                        heavy artillery used on both sides. Weeks later, skirmishes broke out at Cho La, where Indian troops successfully
                        held their ground and forced the Chinese to retreat. The bravery of Indian soldiers in these battles earned widespread
                        respect and significantly boosted morale.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="war-section">
                <h2>Timeline of Key Events</h2>
                <div className="timeline">
                    <img src={timelineImage} alt="Timeline of 1967 War" className="timeline-image" />
                    <ul>
                        <li><strong>September 11, 1967:</strong> Initial clashes occur at Nathu La.</li>
                        <li><strong>September 13, 1967:</strong> Heavy artillery fire exchanged, resulting in significant casualties.</li>
                        <li><strong>October 1, 1967:</strong> Skirmishes erupt at Cho La, with intense hand-to-hand combat.</li>
                        <li><strong>October 10, 1967:</strong> Chinese troops retreat from Cho La, ending the conflict.</li>
                    </ul>
                </div>
            </section>

            {/* Outcome and Conclusion Section */}
            <section className="war-section">
                <h2>Outcome and Conclusion</h2>
                <div className="content-wrapper reverse">
                    <p>
                        The 1967 war was a strategic and morale-boosting victory for India. Despite China's attempts to claim territory,
                        Indian forces not only defended their positions but also forced Chinese troops to withdraw. The successful defense
                        at Nathu La and Cho La affirmed India's sovereignty and showcased the resilience of its armed forces. This conflict
                        marked a turning point in Sino-Indian relations, showing India’s willingness to defend its borders.
                    </p>
                    <img src={outcomeImage} alt="Outcome of 1967 War" className="section-image" />
                </div>
            </section>
        </div>
    );
};

export default War1967;
