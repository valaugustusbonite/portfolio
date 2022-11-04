import React, { useState } from 'react'
import styles from 'components/resume/Resume.module.scss'
import { DarkSectionWrapper } from 'components/common/wrappers'
import { Arrow } from 'components/common/arrow'
import { useWindowDimensions, screenBreakPoints } from 'utils';
import { ResumeModal } from './modal';

export const Resume = () => {
  const windowSize = useWindowDimensions();
  const desktop = screenBreakPoints.desktopMaxWidth;
  const isDesktop = (windowSize?.width ?? 0.0) >= desktop;

  return (
    <DarkSectionWrapper>
      <div className={styles.resumeSection}>
        <div className={styles.subTitle}>
          <p>VIEW MY RESUME</p>
          
        </div>
        <div className={styles.mainText}>
          <h3>know more about my <ExperienceSpanButton/></h3>
          {
            isDesktop ? <div className={styles.arrow}>
            <Arrow />
            </div> : null
          }
        </div>
      </div>
    </DarkSectionWrapper>
  )
}


const ExperienceSpanButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <button className={styles.experience} onClick={openModal}>experience</button>
        <ResumeModal isOpen={isOpen} onClose={closeModal}/>
    </div>
  )
}
