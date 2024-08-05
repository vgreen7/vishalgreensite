import Head from "next/head";
import styles from "/styles/About.module.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

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
            I love creating innovative solutions and improving user experiences.
            This website showcases my work and achievements. Feel free to
            explore and get in touch!
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
