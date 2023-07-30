import React from 'react';

import styles from "./Code.module.css";

const Code = () => {
  return (
    <div className={styles.codeEditor}>
      {'<'}!<span className={styles.pink}>DOCTYPE </span> html{'>'}
      <br />
        {'    <'}
        <span 
          className={styles.pink}
        >html</span> <span className={styles.green}>lang</span>{'='}<span className={styles.yellow}>"fr"</span>{'>'}
        <br />
        {'     <'}<span className={styles.pink}>head</span>{'>'}
        <br />
        {'        <'}<span className={styles.pink}>meta</span> <span className={styles.green}>charset</span>{'='}<span className={styles.yellow}>"UTF-8"</span>{'>'} 
        <br />
        {'        <'}<span className={styles.pink}>title</span>{'>'} Hello Yokr. {'<'}/<span className={styles.pink}>title</span>{'>'} 
        <br />
        {'    <'}/<span className={styles.pink}>head</span>{'>'}
        <br />
        {'    <'}<span className={styles.pink}>body</span>{'>'}
        <br />
        {'         <'}<span className={styles.pink}>p</span>{'>'} Create your project now.{'<'}/<span className={styles.pink}>p</span>{'>'}
        <br />
        {'    <'}/<span className={styles.pink}>body</span>{'>'}
        <br />
        {'    <'}/<span className={styles.pink}>html</span>{'>'}
    </div>
  )
}

export default Code