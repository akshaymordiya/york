import React from 'react';
import { createPortal } from "react-dom";

import Stack from "../Stack";

import styles from "./Drawer.module.css";

const Drawer = ({
  open = false,
  bottomText = <></>,
  children,
  onClose = () => {}
}) => {
  return createPortal(
    <div className={`${styles.drawer} ${open ? styles.open : ""}`}>
      <div 
        className={styles.cross}
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </div>
      <Stack
        direction="column" 
        positionX="spaceBX" 
        positionY="centerY"
        padding="0rem"
      >
        <div className={styles.container}>
          {children}
        </div>
        {bottomText}
      </Stack>
    </div>,
    document.getElementById("drawer")
  )
}

export default Drawer