// src/components/NotificationBar.js

import React from 'react';
import './NotificationBar.css';

const NotificationBar = () => {
    const notifications = [
        { text: "OEE-2023 Successful Candidates Merit List for SSB", link: "#" },
        { text: "Advertisement for recruitment under TA Gp HQ Northern Comd", link: "#" },
        { text: "List of Eligible Candidates of ASB Spl Fds (Cyber Tasks) - 2024", link: "#" },
        { text: "Advertisement for recruitment under TA Gp HQ Central Comd", link: "#" },
        { text: "Final Adv of TA Gp HQ Southern Comd", link: "#" },
        // Add more notifications as needed
    ];

    return (
        <div className="notification-bar">
            <div className="notification-title">NOTIFICATION</div>
            <div className="marquee-container">
                <div className="marquee">
                    {notifications.map((notification, index) => (
                        <div className="notification-item" key={index}>
                            FLASH: {notification.text} <a href={notification.link}>CLICK HERE</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NotificationBar;
