import React, { Fragment } from 'react';

import Logo from '../Logo';

import styles from "./Navbar.module.css";

import useBreakpoints from '../../hooks/useBreakpoints';

const Navbar = () => {

  const {
    sm,
    xs
  } = useBreakpoints();

  const isMobile = sm || xs

  return (
    <div className={styles.navbarContainer}>
      {!isMobile && (
        <Logo />
      )}
      <div className={styles.menu}>
        {isMobile && (
          <Logo />
        )}
        {xs ? (
          <img 
            src='/hamburger.svg'
            className={styles.menuIcon}
          />
        ) : (
          <Fragment>
            <p className={styles.menuItem}>Projects</p>
            <p className={styles.menuItem}>About us</p>
            <p className={styles.menuItem}>Contact</p>
          </Fragment>
        )}
      </div>
      {!isMobile && (
        <div className={styles.space}></div>
      )}
    </div>
  )
}

export default Navbar