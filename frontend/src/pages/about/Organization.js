import React from "react";
import organImage from "../../assets/awards/organ.jpeg";
import "./Organization.css"; // Ensure this file is updated for custom styling

const Organization = () => {
    return (
        <div className="organization-container">
            <h1>Formation and Structure of Indian Army</h1>

            <div className="organization-content">
                <img src={organImage} alt="Formation of Indian Army" className="organization-image" />

                <div className="organization-details">
                    <h2>Each Term in Detail</h2>
                    <ul className="organization-list">
                        <li>
                            <strong>Corps:</strong> Each Division is headed by General Officer Commanding (GOC)-In-C in the rank of Lieutenant General.
                        </li>
                        <li>
                            <strong>Division:</strong> Each Division is headed by General Officer Commanding (GOC) in the rank of Major General. It usually consists of 15,000 combat troops and 8,000 support elements.
                        </li>
                        <li>
                            <strong>Brigade:</strong> A Brigade generally consists of around 3,000 combat troops with supporting elements. An Infantry Brigade usually has 3 Infantry Battalions along with various Support Arms & Services. It is headed by a Brigadier.
                        </li>
                        <li>
                            <strong>Battalion:</strong> A Battalion is commanded by a Colonel and is the Infantry’s main fighting unit. It consists of more than 900 combat personnel.
                        </li>
                        <li>
                            <strong>Rifle Company:</strong> Headed by a Major or Captain, a company comprises 120 soldiers.
                        </li>
                        <li>
                            <strong>Platoon:</strong> An intermediate between a company and section, a platoon is headed by a Captain or Lieutenant, or depending on the availability of commissioned officers, even a junior commissioned officer (Subedar). It has a total strength of about 32 troops.
                        </li>
                        <li>
                            <strong>Section:</strong> The smallest military outfit with a strength of 10 personnel, commanded by a non-commissioned officer of the rank of Havildar or Sergeant.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Organization;
