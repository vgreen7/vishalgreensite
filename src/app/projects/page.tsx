"use client";

import Head from "next/head";
import ProjectsCard from "../../components/ProjectsCard.js";
import projects from "../../data/projects.json";
import styles from "/styles/WorkExperience.module.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer.js";

export default function WorkExperience() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>
        {projects.map((experience: any, index: any) => (
          <ProjectsCard key={index} experience={experience} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
