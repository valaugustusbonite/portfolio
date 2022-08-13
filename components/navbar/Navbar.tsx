import React from 'react'
import styles from 'components/navbar/Navbar.module.scss';
import logo from 'public/assets/white_logo.png';
import { Logo } from 'components/navbar/logo'
import { BurgerMenu } from 'components/navbar/burger_menu'
import { ExpandedMenu } from 'components/navbar/expanded_menu'
import { useWindowDimensions, screenBreakPoints } from 'utils';

export const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <Logo src={logo} alt='logo' />
      <NavbarMenu />
    </nav>
  )
}

const NavbarMenu = () => {
  const windowSize = useWindowDimensions();
  const isDesktop = windowSize.width >= screenBreakPoints.desktopMaxWidth;

  if (isDesktop) {
    return(
      <ExpandedMenu />
    )
  }

  return(
    <BurgerMenu />
  )
}