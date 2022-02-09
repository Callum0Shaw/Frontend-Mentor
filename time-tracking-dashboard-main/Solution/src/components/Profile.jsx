import React from "react";
import {useState} from 'react';
import styles from "./Profile.module.css";
import profile from '../../../images/image-jeremy.png';

const Profile = ({handleTimeChange}) => {
  const [isActive, setIsActive] = useState('weekly');
  const handleToggle = (state) => {
    handleTimeChange(state)
    setIsActive(state)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.avatar} src={profile} alt="Profile picture"></img>
        <div>
          <p className={styles.pText}>Report for</p>
          <h2>Jeremy Robson</h2>
        </div>
      </header>
      <menu className={styles.nav}>
        <li className={isActive === 'daily' ? `${styles.activeToggle}` : null} onClick={() => handleToggle('daily')}>Daily</li>
        <li className={isActive === 'weekly' ? `${styles.activeToggle}` : null} onClick={() => handleToggle('weekly')}>Weekly</li>
        <li className={isActive === 'monthly' ? `${styles.activeToggle}` : null} onClick={() => handleToggle('monthly')}>Monthly</li>
      </menu>
    </div>);
};

export default Profile;
