"use client";

import Head from "next/head";
import WorkExperienceCard from "../../components/WorkExperienceCard.js";
import experience from "../../data/workExperience.json";
import styles from "/styles/WorkExperience.module.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function WorkExperience() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Work Experience</title>
        <meta name="description" content="My work experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Work Experience</h1>
        {experience.map((experience: any, index: any) => (
          <WorkExperienceCard key={index} experience={experience} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
