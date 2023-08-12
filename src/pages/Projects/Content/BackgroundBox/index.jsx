import React, { Fragment } from 'react'

import styles from "./BackgroundBox.module.css";
import Intro from '../../../../components/Intro';
import Button from '../../../../components/Button';


const BackgroundBox = () => {
  return (
    <Fragment>
      <img className={styles.image} src='/bgimage/sass.png' />
      <div className={styles.background}>
        <Intro 
          title="SaaS. Web Apps."
          subTitle="Reinventing technology."
          extendTitleStyle={styles.title}
          extendSubTitleStyle={styles.subTitle}
          />
        <Button extendStyle={styles.button}>What's <span>Next</span>?</Button>
      </div>
    </Fragment>
  )
}

export default BackgroundBox