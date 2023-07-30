import React from 'react'

import styles from "./Parallex.module.css";

const TextParallax = ({
  text,
}) => {
  
  return (
    <div 
      className={styles.parallaxBody}
    >
      <div className={styles.text}>
        {text}
      </div>
      <div className={styles.gradient} >
        <img src="/gradient6.png" id="textMask" />
      </div>
    </div>
  )
}

export default TextParallax