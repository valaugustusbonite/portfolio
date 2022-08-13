import React from 'react'
import styles from 'components/about_me/AboutMe.module.scss';
import { VerticalImage } from 'components/vertical_masked_image';
import dp from 'public/assets/dp.jpg';

export const AboutMe = () => {

  return (
    <section className={styles.aboutMe}>
      <div className={styles.leftSection}>
        <VerticalImage src={dp} alt={'personal-picture'}/>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.descriptionContainer}>
          <h1>Hello!</h1>
          <p>
            I am Val, a full stack software engineer specializing in frontend development. I use React with Typescript and Flutter with Dart on the frontend, and NodeJS/Express with Typescript on the backend.
            <br></br><br></br>
            My passion for design and interest in programming has paved a way towards a software development career.
            <br></br><br></br>
            I am keen on detail, while providing simple but effective designs.
          </p>
        </div>
      </div>
      <div className={styles.overlayDiv}>
        <div className={styles.sectionHeader}>
          ABOUT ME
        </div>
      </div>
    </section>
  )
}