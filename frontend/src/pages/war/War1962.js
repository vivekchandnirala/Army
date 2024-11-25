// src/pages/war/War1962.js
import React from 'react';
import './War1962.css';

// Import images
import overviewImage from '../../assets/war/1962_overview.jpg';
import conflictImage from '../../assets/war/1962_conflict.jpg';
import timelineImage from '../../assets/war/1962_timeline.jpg';
import conclusionImage from '../../assets/war/1962_conclusion.jpg';

const War1962 = () => {
    return (
        <div className="war-page">
            {/* Main Heading */}
            <h1 className="main-heading">The 1962 India-China War</h1>

            {/* Overview Section */}
            <section className="war-section">
                <h2>Overview</h2>
                <div className="content-wrapper">
                    <img src={overviewImage} alt="Overview of 1962 War" className="section-image" />
                    <p>
                        The 1962 war between India and China was a significant border conflict centered around disputed areas
                        in the Himalayas, mainly in the Aksai Chin region and parts of Arunachal Pradesh. Lasting from October to November,
                        the war ended with a Chinese ceasefire. It resulted in India's loss of control over Aksai Chin, highlighting strategic and
                        geopolitical challenges.
                    </p>
                </div>
            </section>

            {/* Reason for Conflict Section */}
            <section className="war-section">
                <h2>Reason for Conflict and Area of Dispute</h2>
                <div className="content-wrapper reverse">
                    <img src={conflictImage} alt="Disputed Area Map" className="section-image" />
                    <p>
                        The primary reasons for the conflict stemmed from territorial disputes along the McMahon Line and the strategic
                        Aksai Chin plateau. Both India and China claimed these areas, with China controlling Aksai Chin and India
                        administering parts of Arunachal Pradesh. Diplomatic efforts failed, and tensions escalated, leading to the
                        conflict in 1962.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="war-section">
                <h2>Timeline of Key Events</h2>
                <div className="timeline">
                    <img src={timelineImage} alt="Timeline of Events" className="timeline-image" />
                    <ul>
                        <li><strong>October 20, 1962:</strong> Chinese forces launch attacks on Indian posts along the border.</li>
                        <li><strong>October 24, 1962:</strong> Major fighting in Ladakh and NEFA (now Arunachal Pradesh) regions.</li>
                        <li><strong>November 18, 1962:</strong> Battle of Rezang La, with the 13 Kumaon Regiment's heroic stand.</li>
                        <li><strong>November 20, 1962:</strong> China declares a unilateral ceasefire, ending active combat.</li>
                    </ul>
                </div>
            </section>

            {/* Conclusion Section */}
            <section className="war-section">
                <h2>Conclusion</h2>
                <div className="content-wrapper">
                    <img src={conclusionImage} alt="Aftermath and Legacy" className="section-image" />
                    <p>
                        The 1962 war had a profound impact on India, leading to significant changes in defense strategy and
                        strengthening military infrastructure. Although India faced heavy losses, the valor of regiments like
                        the 13 Kumaon became a symbol of resilience. The war underscored the need for a robust national defense
                        and shaped India's future approach to border security.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default War1962;
