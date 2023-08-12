import React, { forwardRef } from 'react';

import styles from "./SectionIntroBox.module.css";
import Intro from '../Intro';

const SectionIntroBox = forwardRef(function SectionIntroBox({
  title,
  subTitle,
  extendStyle,
  extendWrapperStyle,
  children
}, ref) {
  return (
    <section className={`${styles.container} ${extendStyle}`}>
      <Intro 
        ref={ref}
        title={title}
        subTitle={subTitle}
        extendWrapperStyle={extendWrapperStyle}
      />
      <div className={styles.data}>
        {children}
      </div>
    </section>
  )
})

export default SectionIntroBox