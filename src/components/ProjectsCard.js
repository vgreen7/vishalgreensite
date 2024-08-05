import React from "react";
import styles from "/styles/ProjectsCard.module.css";

const ProjectsCard = ({ experience }) => {
  return (
    <a href={experience.link} target="_blank" rel="noopener noreferrer">
        <div className={styles.card}>
            <h3 className={styles.name}>{experience.name}</h3>
            <p className={styles.description}>{experience.description}</p>
            <p className={styles.link}>{experience.linkText}</p>
        </div>
    </a>
  );
};

export default ProjectsCard;
