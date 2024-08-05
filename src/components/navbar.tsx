import Link from "next/link";
import styles from "/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About Me</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/work-experience">Work Experience</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
