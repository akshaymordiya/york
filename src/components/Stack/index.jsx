import React from 'react'

import styles from "./Stack.module.css";

const cssIdentifier = {
  "direction" : "flexDirection",
}

const Stack = ({
  children,
  ...props
}) => {

  const style = ["direction", "gap", "padding"].reduce((acc, cssProp) => {
    if(props[cssProp]){
      acc[cssIdentifier[cssProp] || cssProp] = props[cssProp]
    }

    return acc;
  }, {})

  const { 
    positionX = "startX",
    positionY = "startY"
  } = props

  return (
    <div className={`${styles.flexContainer} ${styles[positionX]} ${styles[positionY]}`} style={style}>
      {children}
    </div>
  )
}

export default Stack