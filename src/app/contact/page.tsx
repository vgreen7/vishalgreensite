import Head from "next/head";
import styles from "/styles/About.module.css";
import Navbar from "../../components/navbar";
import Socials from "../../components/Socials";
import Footer from "../../components/footer";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Contact Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Me</h1>
        <Socials />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
