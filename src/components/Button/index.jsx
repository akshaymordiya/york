import React from 'react'
import styles from "./Button.module.css";

const Button = ({
  children,
  extendStyle = "",
  onClick = () => {}
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${extendStyle}`}
    >{children}</button>
  )
}

export default Button