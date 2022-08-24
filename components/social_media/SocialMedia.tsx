import React from 'react'
import styles from 'components/social_media/SocialMedia.module.scss'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export const SocialMedia = () => {
  return (
    <div className={styles.socialMediaContainer}>
      <FaLinkedinIn />
      <FaGithub />
      <SiGmail />
    </div>
  )
}