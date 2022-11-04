import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import styles from 'components/common/buttons/back_button/ArrowBackButton.module.scss'

interface ArrowBackButtonProps {
  onPress: () => void;
}

export const ArrowBackButton = ({
  onPress
} : ArrowBackButtonProps) => {
  return (
    <div className={styles.arrowBackButton}>
      <BsArrowLeft 
        size={30}
        onClick={onPress}
      />
    </div>
  )
}