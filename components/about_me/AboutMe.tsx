import React from 'react'
import styles from 'components/about_me/AboutMe.module.scss';
import dp from 'public/assets/landing_page_bg.svg';
import Image from 'next/image';
import { screenBreakPoints, useWindowDimensions } from 'utils';
import { SocialMedia } from 'components/social_media';

export const AboutMe = () => {
  const windowSize = useWindowDimensions();
  const mobile = screenBreakPoints.tabletMaxWidth;
  const isDesktop = (windowSize?.width ?? 0.0) >= mobile;

  return (
    <section className={styles.aboutMe}>
      <div className={styles.imageSection}>
        <AboutMeAsset />
      </div>
      <div className={styles.textSection}>
        <div className={styles.descriptionContainer}>
          <h1>HELLO.</h1>
          <p>
            I am Val, a full stack software engineer specializing in frontend development. I use React with Typescript and Flutter with Dart on the frontend, and NodeJS/Express with Typescript on the backend.
            <br></br><br></br>
            My passion for design and interest in programming has paved a way towards a software development career.
            <br></br><br></br>
            I am keen on detail, while providing simple but effective designs.
          </p>
        </div>
      </div>
      {
        isDesktop ? <div className={styles.socials}>
          <SocialMedia />
        </div> : null
      }
    </section>
  )
}

const AboutMeAsset = () => {

  return (
    <div className={styles.backgroundImage}>
      <Image
        src={dp}
        alt='background-image'
        layout='fill'
        objectFit='cover'
      >
      </Image>
    </div>
  )
}