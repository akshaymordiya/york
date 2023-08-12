import React, { Fragment, useRef } from 'react'

import styles from "./Home.module.css";

import Hero from './Content/Hero/Index';
import About from './Content/About';
import Language from './Content/Language';
import Footer from '../../components/Footer';
import TextParallex from '../../components/Parallex';

const Home = () => {

  const aboutSectionRef = useRef(null);

  const handleScrollClick = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth"})
  }

  return (
    <div className={styles.container}>
      <Hero onScrollClick={handleScrollClick} />
      <About ref={aboutSectionRef} />
      <TextParallex text={(
        <Fragment>
          AI tools.
          <br />
          Data driven.
          <br />
          Innovation focused.
        </Fragment>
      )} />
      <Language />
      <Footer />
    </div>
  )
}

export default Home