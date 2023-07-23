import React from 'react'

import styles from "./DocBox.module.css";

const DocBox = ({
  firstText = "",
  secondText = "",
  coloredText = "",
  addSpaceBeforeColoredText = false,
  textPosition = "center",
  fixedHeight = false,
}) => {

  return (
    <div
      className={`${styles.docBoxContainer} ${styles[textPosition]}`} 
      style={{
        ...(fixedHeight && {
          height: fixedHeight
        }),
      }}
    >
      <p className={styles.text}></p>
      <p className={`${styles.text} ${addSpaceBeforeColoredText ? styles.space : ""}`}>
        {firstText}
        <br />
        {secondText}
        <span>{coloredText}</span>
        {'.'}
      </p>
    </div>
  )
}

export default DocBox