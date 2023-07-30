import React, { Fragment, useContext } from 'react'

import SectionIntroBox from '../../../../components/SectionIntroBox';
import Grid from '../../../../components/Grid';
import InfoBox from '../InfoBox';
import Box from '../../../../components/Box';
import Stack from '../../../../components/Stack';

import styles from "./Language.module.css";
import Code from '../../../../components/Code';

import { BreakpointContext } from '../../../../context/breakpoint';

const Language = () => {

  const { activeBreakPoint } = useContext(BreakpointContext);

  const isMobile = activeBreakPoint === "xs";

  return (
    <SectionIntroBox
      title="Go. React. Node. Python"
      subTitle="The Language That Resonates."
    >
      <Grid noGutters gap={'0.8rem'}>
        <Grid.Item 
          clg="1 / span 7"
          cmd="1 / span 7"
          csm="1 / span 12"
          cxs="1 / span 12"
        >
          <Box extendStyles={styles.productivityBox} isGridBox>
            <Stack 
              direction={isMobile ? "column" : "row"}
              gap={'2rem'}
              positionX="spaceBX"
              positionY="startY"
            >
              <InfoBox
              titleAnimationDirection="X"
              titleAnimationoffset="calc(-100% - 3rem)"
              excertAnimationDirection="Y"
              excertAnimationoffset="calc(100% + 3rem)"
                wrapWithBox={false}
                positionX="spaceBX"
                positionY="startY"
                titleText={(
                  <Fragment>
                    {'Cutting-Edge'}
                    <br />
                    {'Technology.'}
                  </Fragment>
                )}
                excertText={(
                  <Fragment>
                    <b>Performance. Speed. Quickness. </b>
                    <br />
                    {"Optimize your IT architecture."}
                    <br />
                    {"Skyrocket your performance."}
                  </Fragment>
                )}
              />
              <Code />
            </Stack>
          </Box>
        </Grid.Item>
        {!isMobile && (  
          <Grid.Item 
            clg="8 / span 5" 
            cmd="8 / span 5"
            rmd="1 / span 2"
            rlg="1 / span 2"
            csm="1 / span 12"
            rsm="3 / span 12"
            cxs="1 / span 12"
          >
            <Box isGridBox>
            </Box>
          </Grid.Item>
        )}
        <Grid.Item 
          clg="1 / span 7"
          cmd="1 / span 7"
          cxs="1 / span 12"
          csm="1 / span 12"
        >
          <InfoBox
            positionX="spaceBX"
            isGridBox
            titleAnimationDirection="X"
            titleAnimationoffset="calc(100% - 3rem)"
            excertAnimationDirection="Y"
            excertAnimationoffset="calc(100% + 2rem)"
            titleText={(
              <Fragment>
                {'</Languages.'}
                <br />
                {'Frameworks.'}
                <br />
                {'Libraries >'}
              </Fragment>
            )}
            excertText={(
              <Fragment>
                <b>Go. React. Node. Svelte. Python.</b>
                <br />
                {"It’s your choice."}
              </Fragment>
            )}
          />
        </Grid.Item>
      </Grid>
    </SectionIntroBox>
  )
}

export default Language