import Image from 'next/image';
import React from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import styles from './about.module.css';

const AboutMeCard = () => {
  return (
    <div className={styles.AboutMeCard}>
      <div className={styles.AboutMeImageContatiner}>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          <div className={styles.AboutMeImage}>
            <Image src={images.Artwork} alt='Faizan' />
          </div>
        </motion.div>
      </div>
      <div className={styles.AboutMeTextContatiner}>
        <p className={styles.AboutMeInfo}>
          {/* eslint-disable */}
        Hi, I'm Faizan Javed, a Final year Software Engineering student at FAST-NUCES Islamabad. 
        Currently, I'm a Level 1 Frontend Web Developer on Fiverr and also working as Jr. Software Developer at 0xBase.
        My expertise lies in React and Next.js, and I'm on the path to becoming a full-stack developer.
        {/* eslint-disable */}
          <br />
          <br /> 💻 Jr Software Developer at 0xBase
          <br /> 🙌 Level 1 Frontend Web Developer on Fiverr
          <br /> 🚀 React/Next.js Enthusiast
          <br /> 🦉 Microsoft Learn Student Ambassador
        </p>
        <div className={styles.resumeDiv}>
          <a
            className={styles.resumeBtn}
            href='https://drive.google.com/file/d/1kgOUNW03blbpFGkK0eZQycasIQ4X3kAA/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            Downlod CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
