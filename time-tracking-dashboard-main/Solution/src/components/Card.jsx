import React from "react";
import styles from "./Card.module.css";
import ellipsis from '../../../images/icon-ellipsis.svg';

const Card = ({data}) => {
  const name = data.title.slice(0, 3)
  return (
    <div className={`${styles.cardContainer} ${styles[name]}`}>
      <img className={styles.titleImage} src={`/icon-${data.title.toLowerCase().replace(' ', '-')}.svg`} alt={`Image of ${data.title}`} />
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <h3 className={styles.topicHeader}>{data.title}</h3>
          <img className={styles.ellipsis} src={ellipsis} alt="ellipsis to expand" />
        </header>
        <div className={styles.hoursContainer}>
          <p className={styles.currentHours}>{`${data.timeframes.current}hrs`}</p>
          <p className={styles.previousHours}>{`Last Week - ${data.timeframes.previous}hrs`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
