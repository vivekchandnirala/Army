// src/pages/war/War1965.js
import React from 'react';
import './War1965.css';

// Import images
import introImage from '../../assets/war/intro1.jpg';
import buildupImage from '../../assets/war/buildup.jpg';
import operationGibraltarImage from '../../assets/war/operation-gibraltar.jpg';
import khemkaranImage from '../../assets/war/khemkaran.jpg';
import ceasefireImage from '../../assets/war/ceasefire.jpg';

const War1965 = () => {
    return (
        <div className="war-page">
            {/* Intro Section */}
            <section className="war-intro">
                <h1>The 1965 India-Pakistan War</h1>
                <p>This page explores the background, major events, and impact of the 1965 conflict between India and Pakistan.</p>
                <img src={introImage} alt="India-Pakistan War 1965" className="intro-image" />
            </section>

            {/* Background Section */}
            <section className="war-background">
                <h2>Background of the Conflict</h2>
                <p>
                    The 1965 war between India and Pakistan stemmed from longstanding tensions following the partition in 1947.
                    Both nations disputed the control over the princely state of Jammu and Kashmir, which led to skirmishes and unrest.
                </p>
                <p>
                    In early 1965, skirmishes in the Rann of Kutch escalated tensions. By August, Pakistan launched <strong>Operation Gibraltar</strong>, aiming to infiltrate and incite rebellion in Jammu and Kashmir.
                    This act marked the beginning of active hostilities, ultimately leading to a large-scale conflict.
                </p>
                <img src={buildupImage} alt="Buildup to 1965 War" className="background-image" />
            </section>

            {/* Timeline Section */}
            <section className="war-timeline">
                <h2>Major Events of the War</h2>

                {/* Event 1 */}
                <div className="timeline-event">
                    <img src={operationGibraltarImage} alt="Operation Gibraltar" className="timeline-image" />
                    <div className="event-content">
                        <h3>August 1965 - Operation Gibraltar</h3>
                        <p>Pakistan initiates Operation Gibraltar, sending forces to infiltrate Jammu and Kashmir, aiming to incite local unrest and weaken Indian control over the region.</p>
                    </div>
                </div>

                {/* Event 2 */}
                <div className="timeline-event reverse">
                    <img src={khemkaranImage} alt="Battle of Asal Uttar" className="timeline-image" />
                    <div className="event-content">
                        <h3>September 8-10, 1965 - Battle of Asal Uttar</h3>
                        <p>Indian forces repel a massive tank offensive by Pakistan in Khem Karan, marking one of the largest tank battles since World War II and halting Pakistani advances.</p>
                    </div>
                </div>

                {/* Event 3 */}
                <div className="timeline-event">
                    <img src={ceasefireImage} alt="UN Ceasefire" className="timeline-image" />
                    <div className="event-content">
                        <h3>September 23, 1965 - UN Ceasefire</h3>
                        <p>The United Nations intervenes, resulting in a ceasefire agreement that ends active hostilities, though tensions persist in the following years.</p>
                    </div>
                </div>
            </section>

            {/* Conclusion Section */}
            <section className="war-conclusion">
                <h2>Impact and Legacy</h2>
                <p>
                    The 1965 war left a profound impact on both nations, shaping military strategies and diplomatic relations.
                    Despite the ceasefire, the conflict did not fully resolve the Kashmir issue, which remains a point of contention.
                    The war also highlighted the importance of international mediation in regional conflicts.
                </p>
            </section>
        </div>
    );
};

export default War1965;
