import React from 'react'
import styles from 'components/navbar/Navbar.module.scss';
import logo from 'public/assets/black-logo.png';
import { Logo } from 'components/common/logo'
import { BurgerMenu } from 'components/navbar/burger_menu'
import { ExpandedMenu } from 'components/navbar/expanded_menu'
import { useWindowDimensions, screenBreakPoints } from 'utils';

export const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <Logo src={logo} alt='logo' />
      </div>
      <NavbarMenu />
    </nav>
  )
}

const NavbarMenu = () => {
  const windowSize = useWindowDimensions();
  const isDesktop = (windowSize?.width ?? 0.0) >= screenBreakPoints.desktopMaxWidth;

  if (isDesktop) {
    return(
      <ExpandedMenu />
    )
  }

  return(
    <BurgerMenu />
  )
}