import React, { forwardRef } from 'react'

import styles from "./Intro.module.css"

const Intro = forwardRef(function Intro({
  title,
  subTitle,
  extendWrapperStyle = "",
  extendTitleStyle = "",
  extendSubTitleStyle = ""
}, ref){
  return (
    <div ref={ref} className={`${styles.introBox} ${extendWrapperStyle}`}>
      <h3 className={`${styles.title} ${extendTitleStyle}`}>{title}</h3>
      <h4 className={`${styles.subTitle} ${extendSubTitleStyle}`}>{subTitle}</h4>
    </div>
  )
})

export default Intro