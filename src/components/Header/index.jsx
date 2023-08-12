import React from 'react'
import styles from "./Header.module.css"
import Navbar from '../Navbar'

const Header = ({
  children,
  removeBg = false,
  extendStyles = ""
}) => {
  return (
    <div className={`${styles.hero} ${removeBg ?  styles.removeBg : ""} ${extendStyles}`}>
      <Navbar />
      {children}
    </div>
  )
}

export default Header