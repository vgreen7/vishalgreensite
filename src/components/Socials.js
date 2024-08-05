import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { IoMail } from "react-icons/io5";
import styles from '/styles/Socials.module.css';

const Socials = () => {
  return (
    <div className={styles.socials}>
      <a href="mailto:vishalgreen@vt.edu" target="_blank" rel="noopener noreferrer">
        <IoMail />
      </a>
      <a href="https://www.linkedin.com/in/vishal-green/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/vgreen7" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/v.green_04/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
  );
};

export default Socials;
