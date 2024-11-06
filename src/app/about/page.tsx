import Head from "next/head";
import styles from "/styles/About.module.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer.js";

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <section className={styles.aboutSection}>
          <p>My name is Vishal Green.</p>
          <br />
          <p>
            I love creating innovative solutions and making a difference in the
            world around me.
            <br />
            Growing up I fell in love with coding by playing video games. My
            video game obsession fueled my interest in coding. I alwways asked
            myself, "How do developers make these games?". Asking this question
            led me down the rabbit hole of video game development. I figured,
            "Hey, maybe I can create my own video game too!". This website
            showcases my work and achievements. Feel free to explore and get in
            touch!
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
