import React from 'react'
import styles from 'components/common/scroll_down/ScrollDown.module.scss'
import { BsArrowRight } from 'react-icons/bs'
import { Box } from '@mui/system'

export const ScrollDown = () => {
  return (
    <div className={styles.scrollDown}>
      <p>Scroll Down</p>
      <Box width='20px'/>
      <BsArrowRight />
    </div>
  )
}