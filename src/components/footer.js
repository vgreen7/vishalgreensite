import styles from '/styles/Footer.module.css';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Socials />
      <p>© 2024 Vishal Green. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
