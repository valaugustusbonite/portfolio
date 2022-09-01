import { DarkSectionWrapper } from 'components/common/wrappers'
import React from 'react'
import styles from 'components/education/Education.module.scss'

export const Education = () => {
  return (
    <DarkSectionWrapper>
      <div className={styles.educationContainer}>
        <div className={styles.sectionTitle}>
          <h1>EDUCATION</h1>
        </div>
        <div className={styles.sectionContent}>
          <SchoolSection />
          <Credentials />
        </div>
      </div>
    </ DarkSectionWrapper >
  )
}

const SchoolSection = () => {
  return (
    <div className={styles.schoolSection}>
      <h1>
        University of the Philippines
      </h1>
      <h1>
        Diliman
      </h1>
      <p>Bachelor of Science in Architecture</p>
    </div>
  )
}

const Credentials = () => {
  return(
    <div className={styles.credentials}>
      <p>GWA: 1.55(3.3/4.0)</p>
      <p>Cum Laude</p>
      <p>Scholar, MetroBank Foundation</p>
      <p>Scholar, Overseas Workers Welfare Association</p>
    </div>
  )
}


