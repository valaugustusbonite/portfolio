import styles from 'components/landing_page/LandingPage.module.scss'; 
import bg from 'public/assets/landing_page_bg.svg';
import Image from 'next/image';
import { Navbar } from 'components/navbar';
import floatOne from 'public/assets/landing_page/float_one.jpeg';
import floatTwo from 'public/assets/landing_page/float_two.jpeg';
import floatThree from 'public/assets/landing_page/float_three.jpg';
import { useWindowDimensions, screenBreakPoints } from 'utils';

export const LandingPage = () => {
  const windowSize = useWindowDimensions();
  const mobile = screenBreakPoints.tabletMaxWidth;
  const isDesktop = (windowSize?.width ?? 0.0) >= mobile;

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
          <h2>THE</h2>
          <h2>CREATIVE</h2>
          <h2>DEVELOPER.</h2>
        </div> 
      </div>
      <div className={styles.floatingImages}>
        <div className={styles.imageOne}>
          <Image
            src={floatThree}
            alt='float-one'
            layout='fill'
            objectFit='cover'
            className={styles.image}
          >
          </Image>
        </div>
       {
        isDesktop ? <div className={styles.imageTwo}>
          <Image
            src={floatTwo}
            alt='float-two'
            layout='fill'
            objectFit='cover'
            className={styles.image}
          >
          </Image>
        </div> : null
       }
       {
        isDesktop ?  <div className={styles.imageThree}>
          <Image
            src={floatOne}
            alt='float-three'
            layout='fill'
            objectFit='cover'
            className={styles.image}
          >
          </Image>
        </div> : null
       }
      </div>
    </main>
  )
}