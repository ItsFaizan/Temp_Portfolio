import Link from 'next/link';
import React from 'react';
import {
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsTwitter,
} from 'react-icons/bs';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href='/'>
        <a href='#' className={styles.footer__logo}>
          FaizanJaved
        </a>
      </Link>
      <ul className={styles.permalinks}>
        <li>
          <Link href='#'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='#About'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='#Portfolio'>
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href='#Contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>

      <div className={styles.footer__socials}>
        <Link href=''>
          <a target='_blank'>
            <BsFacebook />
          </a>
        </Link>
        <Link href=''>
          <a target='_blank'>
            <BsInstagram />
          </a>
        </Link>
        <Link href=''>
          <a target='_blank'>
            <BsTwitter />
          </a>
        </Link>
        <Link href='https://www.linkedin.com/in/faizanjaved71/'>
          <a target='_blank'>
            <BsLinkedin />
          </a>
        </Link>
        <Link href='https://github.com/ItsFaizan'>
          <a target='_blank'>
            <BsGithub />
          </a>
        </Link>
      </div>

      <div className={styles.footer__copyright}>
        <small>Faizan Javed &copy; {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};

export default Footer;
