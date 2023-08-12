import React, { useContext } from 'react'
import styles from "./Hero.module.css";

import CommonHeader from '../../../../components/Header';
import Grid from '../../../../components/Grid';
import BackgroundBox from '../BackgroundBox';
import Box from '../../../../components/Box';
import FlexBox from '../FlexBox';
import { BreakpointContext } from '../../../../context/breakpoint';

const Hero = () => {

  const { activeBreakPoint, clientX } = useContext(BreakpointContext);

  const isDesktop = ["xl", "xxl"].includes(activeBreakPoint);

  const canWrap = clientX < 800
  const canFlexboxWrap = clientX < 760

  return (
    <CommonHeader removeBg >
      <Grid noGutters gap={isDesktop ? '1rem' : '0.5rem'} extendStyle={styles.gridBox}>
        <Grid.Item
          clg="1 / span 6"
          cmd="1 / span 6"
          csm={canWrap ? "1 / span 12" : "1 / span 6"}
          cxs="1 / span 12"
          rlg="1 / span 2"
          rmd="1 / span 2"
        >
          <Box extendStyles={`${styles.box} ${styles.noGutters}`}>
            <BackgroundBox />
          </Box>
        </Grid.Item>
        <Grid.Item
          clg="7 / span 6"
          cmd="7 / span 6"
          csm={canWrap ? `1 / span ${canFlexboxWrap ? "12" : "6"}` : "7 / span 6" }
          cxs="1 / span 12"
        >
          <Box extendStyles={styles.box}>
            <FlexBox
              direction='column'
              title="Plugins."
              subTitle="For Your Comfort."
              imgSrc="/bgimage/plugins.png"
              buttonText="Discover"
              buttonSpanText="More"
              buttonStyle={styles.discoverBtn}
            />
          </Box>
        </Grid.Item>
        <Grid.Item
          clg="7 / span 6"
          cmd="7 / span 6"
          csm={canFlexboxWrap ? "1 / span 12" : "7 / span 6"}
          cxs="1 / span 12"
        >
          <Box extendStyles={styles.box}>
            <FlexBox
              direction='column'
              title="Crypto and Data."
              subTitle="The next step in the evolution."
              imgSrc="/bgimage/crypto.png"
              attachedTextWithImage
              buttonText="Coming"
              buttonSpanText="Soon"
              buttonStyle={styles.comigSoonBtn}
            />
          </Box>
        </Grid.Item>
      </Grid>
    </CommonHeader>
  )
}

export default Hero