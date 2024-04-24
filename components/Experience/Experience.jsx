import React from 'react';
import styles from './experience.module.css';

const Experience = () => {
  return (
    <div className={styles.experience}>
      <div>
        <h2>Experience</h2>
      </div>
      <div className={styles.exp}>
        <div className={styles.exp_container}>
          <div className={styles.exp_comp}>
            <div>
              <h3>Jr Software Developer</h3>
              <p>0xBase</p>
            </div>
            <div>
              <ul className={styles.exp_details}>
                <li>
                Working in a team of four to develop frontend of Folionomics, a project aimed at transforming
                how people manage their financial portfolios, using Next.js framework
                </li>
                <li>
                Implemented state management solutions such as React Context API to manage complex application states
                </li>
              </ul>
            </div>
            <div className={styles.exp_timeline}>
              <div>12/2023 - Present</div>
              <div>Islamabad, Remote</div>
            </div>
          </div>
          <div className={styles.exp_comp}>
            <div>
              <h3>Level 1 Frontend Web Developer</h3>
              <p>Fiverr</p>
            </div>
            <div>
              <ul className={styles.exp_details}>
                <li>
                Successfully completed 20 plus orders as a frontend web developer, specializing in Svelte and Astro frameworks,
while ensuring responsive design for UI.
                </li>
                <li>
                Achieved a 100 percent order completion rate, demonstrating reliability and commitment to meeting project
requirements and deadlines.
                </li>
              </ul>
            </div>
            <div className={styles.exp_timeline}>
              <div>10/2023 - Present</div>
              <div>Fiverr, Remote</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
