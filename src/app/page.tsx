"use client";

import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    console.log("Arrow clicked"); // Debugging line
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Vishal Green</title>
        <meta name="description" content="My resume website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <div className={styles.profileImageWrapper}>
            <Image
              src="/images/vishalgreen.jpg"
              alt="Picture of Vishal Green"
              className={styles.profileImage}
              width={300}
              height={200}
            />
          </div>
          <h1 className={styles.title}>Hello! I'm Vishal Green.</h1>
        </div>

        <div className={styles.arrowContainer}>
          <Image
            src="/images/downarrow.png"
            alt="Scroll down arrow"
            className={styles.arrow}
            onClick={scrollToBottom}
            width={50}
            height={50}
          />
        </div>

        <section ref={aboutRef} id="about" className={styles.about}>
          <p>
            Hey! I'&#39'm Vishal Green, a Computer Science student at Virginia
            Tech. I am passionate about solving big problems, and I do so with
            the help of some creativity, ingenuity, and a bit of code.
          </p>
          <br />
          <p>
            For a more in depth glimpse into my life, feel free to check out the
            <Link legacyBehavior href="/about">
              <a className={styles.aboutLink}> About Me </a>
            </Link>
            section.
          </p>
          <br />
          <p>
            If you're interested in my work experience, it can be found in the
            <Link legacyBehavior href="/work-experience">
              <a className={styles.aboutLink}> Work Experience </a>
            </Link>
            section.
          </p>
          <br />
          <p>
            I have some personal projects too! Those can be found under the
            <Link legacyBehavior href="/projects">
              <a className={styles.aboutLink}> Projects </a>
            </Link>
            section.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
