// src/pages/war/War1947.js
import React from 'react';
import './War1947.css';

// Import images
import mainImage from '../../assets/war/1947_main.jpg';
import overviewImage from '../../assets/war/1947_overview.jpg';
import conflictImage from '../../assets/war/1947_conflict.jpg';
import timelineImage from '../../assets/war/1947_timeline.jpg';
import conclusionImage from '../../assets/war/1947_conclusion.jpg';

const War1947 = () => {
    return (
        <div className="war-page">
            {/* Main Heading and Main Photo */}
            <h1 className="main-heading">The 1947-48 India-Pakistan War</h1>
            <img src={mainImage} alt="Main 1947 War Image" className="main-image" />

            {/* Overview Section */}
            <section className="war-section">
                <h2>Overview</h2>
                <div className="content-wrapper">
                    <img src={overviewImage} alt="Overview of 1947 War" className="section-image" />
                    <p>
                        The 1947-48 India-Pakistan War, often referred to as the First Kashmir War, marked the first military
                        conflict between India and Pakistan shortly after the two nations gained independence. The dispute centered
                        on Jammu and Kashmir, a princely state situated between the two countries. Although Maharaja Hari Singh,
                        the ruler of Kashmir, initially aimed to remain neutral, political pressures and a tribal invasion from
                        Pakistan led to the state's accession to India. This war set the foundation for the ongoing conflict over
                        Kashmir, with India and Pakistan still contesting control over the region.
                    </p>
                </div>
            </section>

            {/* Reason for Conflict Section */}
            <section className="war-section">
                <h2>Reason for Conflict</h2>
                <div className="content-wrapper reverse">
                    <p>
                        The conflict's origins lay in the 1947 partition of British India, which divided the territory based on
                        religious lines but left several princely states to decide their allegiance. Jammu and Kashmir, with a
                        Muslim-majority population but a Hindu ruler, was a particularly contentious region. Pakistan sought to
                        annex Kashmir, citing its Muslim population, while India emphasized the ruler’s legal right to decide.
                        The situation escalated when tribal militias and Pakistani forces launched attacks on Kashmir, pushing
                        Maharaja Hari Singh to seek military assistance from India. As part of the arrangement, he signed the
                        Instrument of Accession, aligning Kashmir with India.
                    </p>
                    <img src={conflictImage} alt="Conflict Reason Image" className="section-image" />
                </div>
            </section>

            {/* Timeline Section */}
            <section className="war-section">
                <h2>Timeline of Key Events</h2>
                <div className="timeline">
                    <img src={timelineImage} alt="Timeline of Events" className="timeline-image" />
                    <ul>
                        <li><strong>October 22, 1947:</strong> Tribal militias backed by Pakistan invade Kashmir, targeting
                            strategic areas.</li>
                        <li><strong>October 26, 1947:</strong> Under threat, Maharaja Hari Singh signs the Instrument of
                            Accession to join India, requesting military support.</li>
                        <li><strong>October 27, 1947:</strong> Indian troops airlifted to Srinagar, securing the capital and
                            pushing back invaders.</li>
                        <li><strong>November 1947:</strong> Indian forces regain control of Baramulla and other key regions.</li>
                        <li><strong>December 1948:</strong> India regains a majority of Jammu and Kashmir; UN calls for a
                            ceasefire and temporary division of the region.</li>
                        <li><strong>January 1, 1949:</strong> A UN-brokered ceasefire takes effect, establishing the Line of Control (LoC).</li>
                    </ul>
                </div>
            </section>

            {/* Conclusion Section */}
            <section className="war-section">
                <h2>Conclusion</h2>
                <div className="content-wrapper">
                    <p>
                        The 1947-48 war concluded with the establishment of the Line of Control, dividing Kashmir between India and Pakistan.
                        Although both nations retained significant portions, the core issue of Kashmir’s sovereignty remains unresolved.
                        The ceasefire, monitored by the United Nations, marked only a temporary halt, and future conflicts would continue
                        over the region. The First Kashmir War highlighted the deep-rooted and complex nature of the Indo-Pakistan rivalry,
                        with military, political, and regional implications that continue to shape the subcontinent's dynamics.
                    </p>
                    <img src={conclusionImage} alt="Conclusion Image" className="section-image" />
                </div>
            </section>
        </div>
    );
};

export default War1947;
