import styles from 'components/landing_page/LandingPage.module.scss'; 
import bg from 'public/assets/landing_bg.svg';
import Image from 'next/image';

export const LandingPage = () => {
  return (
    <main className={styles.landingPage}>
      {/* <Image 
        src={bg}
        layout='fill'
        objectFit='cover'
        alt='background-image'
      ></Image> */}
      <div className={styles.overlayDiv}>
        <div className={styles.centerDiamond}>

        </div>
        <div className={styles.mainText}>
          HELLO.
        </div> 
      </div>
    </main>
  )
}