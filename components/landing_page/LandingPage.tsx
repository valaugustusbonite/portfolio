import styles from 'components/landing_page/LandingPage.module.scss'; 
import bg from 'public/assets/landing_page_bg.svg';
import Image from 'next/image';
import { Navbar } from 'components/navbar';

export const LandingPage = () => {
  return (
    <main className={styles.landingPage}>
      <div className={styles.navbarContainer}>
        <Navbar />
        <div className={styles.subTitle}>
          <h3>Val Augustus Bonite</h3>
          <p>Software Engineer</p>
        </div>
      </div>
      <div className={styles.overlayDiv}>
        <div className={styles.mainText}>
          <h2>CREATIVE</h2>
          <h5>DEVELOPER</h5>
        </div> 
      </div>
    </main>
  )
}