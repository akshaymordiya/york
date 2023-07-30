import React, { forwardRef } from 'react';

import styles from "./SectionIntroBox.module.css";

const SectionIntroBox = forwardRef(function SectionIntroBox({
  title,
  subTitle,
  children
}, ref) {
  return (
    <section className={styles.container}>
      <div ref={ref} className={styles.introBox}>
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
      </div>
      <div className={styles.data}>
        {children}
      </div>
    </section>
  )
})

export default SectionIntroBox