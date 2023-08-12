import React from 'react'
import { Link } from "react-router-dom";

import styles from "./ComingSoon.module.css"

const ComingSoon = () => {
  return (
    <div className={styles.wrapper}>
      <p>Coming soon</p>
      <Link className={styles.gotoHome} to="/">
        Visit Home
      </Link>
    </div>
  )
}

export default ComingSoon