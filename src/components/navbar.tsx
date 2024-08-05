"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "/styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link href="/">Vishal Green</Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        <Link href="/" className={styles.link} onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link
          href="/about"
          className={styles.link}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          href="/work-experience"
          className={styles.link}
          onClick={() => setIsOpen(false)}
        >
          Work Experience
        </Link>
        <Link
          href="/projects"
          className={styles.link}
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={styles.link}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
