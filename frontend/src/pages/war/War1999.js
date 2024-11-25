// src/pages/war/War1999.js
import React from 'react';
import './War1999.css';

// Import images
import mainImage from '../../assets/war/kargil_main.jpg';
import backgroundImage from '../../assets/war/kargil_background.jpg';
import conflictImage from '../../assets/war/kargil_conflict.jpg';
import operationImage from '../../assets/war/kargil_operation.jpg';
import timelineImage from '../../assets/war/kargil_timeline.jpg';
import outcomeImage from '../../assets/war/kargil_outcome.jpg';

const War1999 = () => {
    return (
        <div className="war-page">
            {/* Main Heading and Main Photo */}
            <h1 className="main-heading">The Kargil War of 1999</h1>
            <img src={mainImage} alt="Kargil War Main Image" className="main-image" />

            {/* Background Section */}
            <section className="war-section">
                <h2>Background</h2>
                <div className="content-wrapper">
                    <p>
                        The Kargil War, fought between India and Pakistan in 1999, is a significant conflict over the Kargil district
                        in Jammu and Kashmir. The conflict began when Pakistani soldiers and militants infiltrated the Indian side
                        of the Line of Control (LoC), seizing high-altitude positions in the mountains. These intrusions were an
                        attempt to sever the link between Kashmir and Ladakh, forcing India to retaliate with a military campaign
                        aimed at reclaiming lost territories.
                    </p>
                    <img src={backgroundImage} alt="Background of Kargil War" className="section-image" />

                </div>
            </section>

            {/* Reason for Conflict Section */}
            <section className="war-section">
                <h2>Reason for Conflict</h2>
                <div className="content-wrapper reverse">
                    <p>
                        Pakistan sought to occupy strategic positions in Kargil to control the crucial highway connecting Srinagar
                        and Leh, cutting off Ladakh from the rest of India. This would have allowed Pakistan to exert pressure on
                        Indian forces in the Siachen Glacier area. The infiltrations were part of Pakistan's broader strategy to
                        internationalize the Kashmir issue, which led to open hostilities between the two nations.
                    </p>
                    <img src={conflictImage} alt="Reason for Kargil Conflict" className="section-image" />
                </div>
            </section>

            {/* Operations and Strategies Section */}
            <section className="war-section">
                <h2>Operations and Strategies</h2>
                <div className="content-wrapper">
                    <p>
                        India launched Operation Vijay to recapture the high-altitude positions held by Pakistani forces. The Indian
                        Air Force also engaged through Operation Safed Sagar, using air strikes to target enemy positions. Despite
                        the challenging mountainous terrain, Indian troops advanced, often under heavy artillery fire. The operation
                        showcased India’s strategic determination and military capability, as soldiers fought in extreme conditions
                        to secure each point.
                    </p>
                    <img src={operationImage} alt="Operations in Kargil War" className="section-image" />

                </div>
            </section>

            {/* Timeline Section */}
            <section className="war-section">
                <h2>Timeline of Key Events</h2>
                <div className="timeline">
                    <img src={timelineImage} alt="Timeline of Kargil War" className="timeline-image" />
                    <ul>
                        <li><strong>May 3, 1999:</strong> Locals report suspicious activities in the Kargil area.</li>
                        <li><strong>May 26, 1999:</strong> Indian Air Force launches airstrikes under Operation Safed Sagar.</li>
                        <li><strong>June 6, 1999:</strong> Indian Army launches major offensive in Dras and Batalik sectors.</li>
                        <li><strong>June 29, 1999:</strong> Key posts like Point 5060 and Point 5100 are recaptured.</li>
                        <li><strong>July 4, 1999:</strong> Indian forces retake the strategic Tiger Hill.</li>
                        <li><strong>July 26, 1999:</strong> Kargil conflict officially ends as Indian troops push out all infiltrators.</li>
                    </ul>
                </div>
            </section>

            {/* Outcome and Conclusion Section */}
            <section className="war-section">
                <h2>Outcome and Conclusion</h2>
                <div className="content-wrapper reverse">
                    <img src={outcomeImage} alt="Outcome of Kargil War" className="section-image" />
                    <p>
                        The Kargil War ended with a decisive Indian victory, with Indian forces successfully reclaiming all occupied
                        territories. The conflict led to a significant loss of life and resources but demonstrated India's military
                        resilience and commitment to its sovereignty. July 26 is commemorated annually as Kargil Vijay Diwas in honor
                        of the Indian soldiers' bravery and sacrifice. The war highlighted the need for greater vigilance along the
                        LoC and reshaped India’s military and diplomatic strategies in the region.
                    </p>

                </div>
            </section>
        </div>
    );
};

export default War1999;
