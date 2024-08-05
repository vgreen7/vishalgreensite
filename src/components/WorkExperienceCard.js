import React from "react";
import styles from "/styles/WorkExperienceCard.module.css";

const WorkExperienceCard = ({ experience }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{experience.name}</h3>
      <h4 className={styles.place}>{experience.place}</h4>
      <p className={styles.years}>{experience.years}</p>
      <p className={styles.description}>{experience.description}</p>
    </div>
  );
};

export default WorkExperienceCard;
