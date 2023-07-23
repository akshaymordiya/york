import React, { useMemo } from 'react';

import Navbar from '../../../../components/Navbar';

import styles from "./Header.module.css";
import DocBox from '../../../../components/DocBox';

import useBreakpoints from '../../../../hooks/useBreakpoints';

const boxOnedefaultStyle = {
  height: "135px",
  position: {
    bottom: "16%",
    right: "calc(5% + 113px)"
  }
}

const boxTwodefaultStyle = {
  height: "125px",
  position: {
    bottom: "calc(16% + 200px)",
    right: "5%"
  }
}

const Header = () => {

  const breakpoints = useBreakpoints();

  const {
    xs, sm, md, lg, xl, xxl
  } = breakpoints;

  const activeBreakpointKey = Object.keys(breakpoints).find(key => breakpoints[key]);

  const docBoxStyle = useMemo(() => {
    return {
      boxOne: {
        xs: {
          height: false,
          position: {
            bottom: "16%",
            right: "calc(5% + 113px)"
          }
        },
        sm: {
          height: "120px",
          position: {
            bottom: "16%",
            right: "calc(5% + 113px)"
          }
        },
        md: {
          height: "120px",
          position: {
            bottom: "16%",
            right: "calc(5% + 113px)"
          }
        },
        lg: boxOnedefaultStyle,
        xl: boxOnedefaultStyle,
        xxl: {
          height: "155px",
          position: {
            bottom: "16%",
            right: "calc(5% + 113px)"
          }
        }
      },
      boxTwo: {
        xs: {
          height: false,
          position: {
            bottom: "calc(16% + 140px)",
            right: "5%"
          }
        },
        sm: {
          height: "100px",
          position: {
            bottom: "calc(16% + 185px)",
            right: "5%"
          }
        },
        md: {
          height: "100px",
          position: {
            bottom: "calc(16% + 185px)",
            right: "5%"
          }
        },
        lg: boxTwodefaultStyle,
        xl: boxTwodefaultStyle,
        xxl: {
          height: "150px",
          position: {
            bottom: "calc(16% + 225px)",
            right: "5%"
          }
        }
      }
    }
  }, [xs,sm,md,lg,xl,xxl]);

  const docBoxOneActiveStyle = docBoxStyle.boxOne[activeBreakpointKey] || boxOnedefaultStyle

  const docBoxTwoActiveStyle = docBoxStyle.boxTwo[activeBreakpointKey] || boxTwodefaultStyle

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
          fixedHeight={docBoxTwoActiveStyle.height}
        /> 
        <div className={styles.boxWrapper}>
          <DocBox 
            firstText='AI.'
            secondText='SaaS.'
            coloredText='Future'
            fixedHeight={docBoxOneActiveStyle.height}
            textPosition='start'
          />
          <div className={styles.scrollArrow}>
            <img
              className={styles.arrowIcon}
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