import React, { useContext, Suspense, useRef, Fragment } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

import Navbar from '../../../../components/Navbar';

import styles from "./Header.module.css";
import DocBox from '../../../../components/DocBox';

import { BreakpointContext } from '../../../../context/breakpoint';

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

const Header = ({
  onScrollClick = () => {},
  enableSplineAnimation= false
}) => {

  const fallbackRef = useRef(null);
  const splineRef = useRef(null);

  const {activeBreakPoint: activeBreakpointKey} = useContext(BreakpointContext);

  const docBoxOneHeight = boxOneHeight[activeBreakpointKey || "lg"]

  const docBoxTwoHeight = boxTwoHeight[activeBreakpointKey || "lg"]

  function onSplineLoad(){
    fallbackRef.current.style.display = "none";
    splineRef.current.style.display = "block"
  }

  return (
    <div className={styles.hero}>
      {!enableSplineAnimation ? (
        <div ref={fallbackRef} className={styles.fallbackBG}></div>
        ) : (
        <Fragment>
          <div ref={fallbackRef} className={styles.coloredBg}></div>
          <Suspense fallback={(
            <div className={styles.fallbackBG}></div>
          )}>
            <Spline 
            scene='https://prod.spline.design/xqt0oS7OvIXx8l4h/scene.splinecode'
            className={styles.spline}
            onLoad={onSplineLoad}
            ref={splineRef}
            ></Spline>
          </Suspense>
        </Fragment>
      )}
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
            onClick={onScrollClick}
           >
            <div className={styles.chevron}></div>
            <div className={styles.chevron}></div>
            <div className={styles.chevron}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header