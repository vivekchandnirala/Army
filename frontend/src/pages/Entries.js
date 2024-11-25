import React from "react";
import "./Entries.css"; // Ensure to create and update this CSS file for styling

const Entries = () => {
    return (
        <div className="entries-container">
            <h1>Modes to Join as Officer in Indian Army</h1>

            <table className="entries-table">
                <thead>
                    <tr>
                        <th>Entry</th>
                        <th>Nature of Commission</th>
                        <th>Training Period (with Location)</th>
                        <th>Age Criteria</th>
                        <th>Min. Qualification (Education)</th>
                        <th>Eligibility</th>
                        <th>Appx no. of Seats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="7" className="section-header">After 12</td>
                    </tr>
                    <tr>
                        <td>NDA Exam</td>
                        <td>Permanent Commission</td>
                        <td>3 years at NDA (Khadakwasla) + 1 year at IMA (Dehradun)</td>
                        <td>16.5 to 19.5 years</td>
                        <td>10+2 with Physics & Mathematics</td>
                        <td>Unmarried Male Candidates</td>
                        <td>~300 (Army, Navy, Air Force)</td>
                    </tr>
                    <tr>
                        <td>10+2 TES Entry</td>
                        <td>Permanent Commission</td>
                        <td>5 years (1 year at OTA Gaya + 4 years at CME Pune / MCTE Mhow / MCEME Secunderabad)</td>
                        <td>16.5 to 19.5 years</td>
                        <td>10+2 with minimum 70% in Physics, Chemistry, and Mathematics</td>
                        <td>Unmarried Male Candidates</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td colSpan="7" className="section-header">After Graduation</td>
                    </tr>
                    <tr>
                        <td>CDS Exam</td>
                        <td>Permanent Commission</td>
                        <td>18 months at IMA (Dehradun)</td>
                        <td>19 to 24 years</td>
                        <td>Graduate from recognized university</td>
                        <td>Unmarried Male Candidates</td>
                        <td>~150</td>
                    </tr>
                    <tr>
                        <td>TGC Entry</td>
                        <td>Permanent Commission</td>
                        <td>1 year at IMA (Dehradun)</td>
                        <td>20 to 27 years</td>
                        <td>BE / B.Tech in notified stream</td>
                        <td>Male Engineering Graduates</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>SSC (Tech) Entry</td>
                        <td>Short Service Commission</td>
                        <td>49 weeks at OTA (Chennai)</td>
                        <td>20 to 27 years</td>
                        <td>BE / B.Tech in notified stream</td>
                        <td>Both Male and Female Engineering Graduates</td>
                        <td>~175 (Men), ~14 (Women)</td>
                    </tr>
                    <tr>
                        <td>NCC Entry</td>
                        <td>Short Service Commission</td>
                        <td>49 weeks at OTA (Chennai)</td>
                        <td>19 to 25 years</td>
                        <td>Graduate with 50% aggregate and NCC 'C' Certificate</td>
                        <td>Both Male and Female with NCC 'C' Certificate</td>
                        <td>50 (Men), 5 (Women)</td>
                    </tr>
                    <tr>
                        <td>ACC Entry</td>
                        <td>Permanent Commission</td>
                        <td>4 years (3 years at ACC Wing, Dehradun & 1 year at IMA)</td>
                        <td>20 to 27 years</td>
                        <td>10+2 or Equivalent</td>
                        <td>Only for serving Soldiers with minimum service</td>
                        <td>75</td>
                    </tr>
                    <tr>
                        <td>Territorial Army</td>
                        <td>Short Service Commission</td>
                        <td>1 month of training at TA Training School</td>
                        <td>18 to 42 years</td>
                        <td>Graduate from recognized university</td>
                        <td>Civilian Professionals and Ex-Servicemen</td>
                        <td>Varies</td>
                    </tr>
                    <tr>
                        <td>PC (SL) Entry</td>
                        <td>Permanent Commission (Special List)</td>
                        <td>4 weeks at IMA (Dehradun)</td>
                        <td>Up to 42 years</td>
                        <td>10+2 or Equivalent</td>
                        <td>Only for serving JCOs, NCOs, and OR</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Judge Advocate General (JAG) Entry</td>
                        <td>Short Service Commission</td>
                        <td>49 weeks at OTA (Chennai)</td>
                        <td>21 to 27 years</td>
                        <td>LLB with 55% aggregate and registered with Bar Council of India / State</td>
                        <td>Both Male and Female Law Graduates</td>
                        <td>6 (Men), 2 (Women)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Entries;
