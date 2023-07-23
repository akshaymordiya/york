import React, { useState } from 'react';

import Navbar from '../../../../components/Navbar';

import styles from "./Header.module.css";
import DocBox from '../../../../components/DocBox';

import useBreakpoints from '../../../../hooks/useBreakpoints';

const boxOneHeight = {
  xs: false,
  sm: "120px",
  md:"120px",
  lg: "135px",
  xl: "135px",
  xxl: "155px"
}

const boxTwoHeight = {
  xs: false,
  sm: "100px",
  md:"100px",
  lg: "125px",
  xl: "125px",
  xxl: "150px"
}

const Header = () => {

  const [enableScrollAnimation, setEnableScrollAnimation ] = useState(false);

  const breakpoints = useBreakpoints();

  const activeBreakpointKey = Object.keys(breakpoints).find(key => breakpoints[key]);

  const docBoxOneHeight = boxOneHeight[activeBreakpointKey || "lg"]

  const docBoxTwoHeight = boxTwoHeight[activeBreakpointKey || "lg"]

  return (
    <div className={styles.hero}>
      <Navbar />
      <div className={styles.heroText}>
        <p>More than technology.</p>
        <p>A mindset shift.</p>
      </div>
      <div className={styles.docBoxWrapper}>       
        <DocBox 
          firstText='Enhance'
          secondText='your'
          coloredText='brand'
          textPosition='center'
          addSpaceBeforeColoredText
          fixedHeight={docBoxTwoHeight}
        /> 
        <div className={styles.boxWrapper}>
          <DocBox 
            firstText='AI.'
            secondText='SaaS.'
            coloredText='Future'
            fixedHeight={docBoxOneHeight}
            textPosition='start'
          />
          <div 
            className={styles.scrollArrow}
            onMouseEnter={(_) => setEnableScrollAnimation(true)}
            onMouseLeave={(_) => setEnableScrollAnimation(false)}
           >
            <img
              className={`${styles.arrowIcon} ${enableScrollAnimation ?  styles.animate : ""}`}
              alt=""
              src="/arrow.svg"
              data-animate-on-scroll
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header