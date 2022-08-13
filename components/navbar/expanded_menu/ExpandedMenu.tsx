import React from 'react'
import styles from 'components/navbar/expanded_menu/ExpandedMenu.module.scss'

let labels: string[] = [
  'About',
  'Projects',
  'Experience',
  'Skills',
  'Contact',
]

export const ExpandedMenu = () => {
  return (
    <div>
      {
        labels.map((item) => <MenuItem key={labels.indexOf(item)} label={item}/>)
      }
    </div>
  )
}

type MenuItemProps = {
  label: string;
  onClick?: () => void;
}

const MenuItem = ({label, onClick}: MenuItemProps) => {
  return(
    <div className={styles.menuItem}>
      <p>{label}.</p>
    </div>
  )
}