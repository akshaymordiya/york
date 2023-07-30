import React from 'react'

import styles from "./Box.module.css";

const Box = ({
  children,
  isGridBox = false,
  extendStyles = null
}) => {
  return (
    <div className={`${styles.container} ${extendStyles ?? ""}`}>
      {children}
    </div>
  )
}

export default Box