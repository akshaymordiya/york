import React, { Fragment, useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../Logo';
import Drawer from '../Drawer';

import styles from "./Navbar.module.css";

import { BreakpointContext } from '../../context/breakpoint';

const menus = [
  {
    title: "Projects",
    route: "/projects"
  },
  {
    title: "About us",
    route: "/about-us"
  },
  {
    title: "Contact",
    route: "/contact"
  }
]

const Menu = ({
  activeLink
}) => (
  <Fragment>
    {menus.map(menu => (
      <Link key={menu.title} to={menu.route} className={`${styles.menuItem} ${menu.route === activeLink ? styles.active : ""}`}>
        {menu.title}
      </Link>
    ))}
  </Fragment>
)

const Navbar = () => {

  const {
    breakpointValues: {
      sm,
      xs
    }
  } = useContext(BreakpointContext);
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(open => !open);

  const isMobile = sm || xs

  return (
    <div className={styles.navbarContainer}>
      {!isMobile && (
        <Link to="/">
          <Logo />
        </Link>
      )}
      <div className={styles.menu}>
        {isMobile && (
          <Link to="/">
            <Logo />
          </Link>
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
              <Menu activeLink={pathname} />
            </Drawer>
          </Fragment>
        ) : <Menu activeLink={pathname} />}
          
      </div>
      {!isMobile && (
        <div className={styles.space}></div>
      )}
    </div>
  )
}

export default Navbar