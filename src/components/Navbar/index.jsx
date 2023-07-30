import React, { Fragment, useContext, useState } from 'react';

import Logo from '../Logo';
import Drawer from '../Drawer';

import styles from "./Navbar.module.css";

import { BreakpointContext } from '../../context/breakpoint';

const Menu = () => (
  <Fragment>
    <p className={styles.menuItem}>Projects</p>
    <p className={styles.menuItem}>About us</p>
    <p className={styles.menuItem}>Contact</p>
  </Fragment>
)

const Navbar = () => {

  const {
    breakpointValues: {
      sm,
      xs
    }
  } = useContext(BreakpointContext);

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(open => !open);

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
          <Fragment>
            <img 
              src='/hamburger.svg'
              className={styles.menuIcon}
              onClick={toggleDrawer}
            />
            <Drawer
              open={open}
              onClose={toggleDrawer}
              bottomText={<Logo />}
            >
              <Menu />
            </Drawer>
          </Fragment>
        ) : <Menu />}
          
      </div>
      {!isMobile && (
        <div className={styles.space}></div>
      )}
    </div>
  )
}

export default Navbar