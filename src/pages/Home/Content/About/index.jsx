import React, { Fragment, useContext, forwardRef } from 'react'

import SectionIntroBox from '../../../../components/SectionIntroBox';
import Grid from '../../../../components/Grid';
import InfoBox from '../InfoBox';

import Box from '../../../../components/Box';
import Stack from '../../../../components/Stack';
import styles from "./About.module.css";

import { BreakpointContext } from '../../../../context/breakpoint';
import ProgressCircle from '../../../../components/ProgressBar';
import animateOnViewPortWrapper from '../../../../components/AnimateOnViewPort';

const centerText = '70%';
const topText = 'Start';
const bottomText = 'End';

const ImageWrapper = ({
  style,
  src,
  children = null,
}) => {

  return (
    <Box
      extendStyles={`${style}`}
      isGridBox
    > 
      <Stack 
        direction="row" positionX="centerX" positionY="centerY"
      >
        {children ? children : (
          <img
            src={src}
            className={styles.image}
          />
        )}
      </Stack>
    </Box>
  )
}

const Image = animateOnViewPortWrapper(ImageWrapper, { isGridBox: true })

const About = forwardRef(function About(props, ref){

  const { activeBreakPoint } = useContext(BreakpointContext);

  const isMobile = activeBreakPoint === "xs";

  const isDesktop = ["xl", "xxl"].includes(activeBreakPoint);

  return (
    <SectionIntroBox
      title="Site. App. eCom. SaaS."
      subTitle="Guidance. Without Boundaries."
      ref={ref}
    >
      <Grid noGutters gap={isDesktop ? '1.5rem' : '0.8rem'}>
        <Grid.Item 
          clg="1 / span 6"
          cmd="1 / span 6"
          csm="1 / span 6"
          cxs="1 / span 12"
        >
          <InfoBox
            extendAnimationStyles={styles.gridBox}
            positionX="spaceBX"
            titleAnimationDirection="X"
            titleAnimationoffset="calc(-100% - 2rem)"
            excertAnimationDirection="Y"
            excertAnimationoffset="calc(100% + 2rem)"
            isGridBox
            titleText={(
              <Fragment>
                {'An Audit'}
                <br />
                {'Tangible Results.'}
              </Fragment>
            )}
            excertText={(
              <Fragment>
                <b>Advice. Analysis. Strategies. Transformations.</b>
                <br />
                {"Discover the key elements to propel"}
                <br />
                {"your business forward."}
              </Fragment>
            )}
          />
        </Grid.Item>
        <Grid.Item 
          clg="7 / span 6"
          cmd="7 / span 6"
          csm="7 / span 6"
          cxs="1 / span 12"
        >
          <InfoBox
            extendStyles={`${styles.gradientsBackground}`}

            isGridBox
            titleAnimationDirection="Y"
            titleAnimationoffset="calc(-100% - 4rem)"
            excertAnimationDirection="X"
            excertAnimationoffset="calc(100% + 2rem)"
            positionX="spaceBX"
            positionY="endY"
            titleText={(
              <Fragment>
                {'Versatility.'}
                <br />
                {'Agility. Expertise.'}
              </Fragment>
            )}
            excertText={(
              <Fragment>
                <b>Website. Application. SaaS. Ecommerce. Droshipping. Start-up.</b>
                <br />
                {"Your Ideas. Our Expertise. One Success."}
              </Fragment>
            )}
          />
        </Grid.Item>
        <Grid.Item 
          clg="1 / span 3"
          cmd="1 / span 3"
          cxs="1 / span 12"
          csm="1 / span 6"
          rsm="2 / span 1"
        >
          <Image 
            src='/cleanshot-20230205-at-1758-1@2x.png'
            style={styles.blackBackgorund}
          />
        </Grid.Item>
        <Grid.Item 
          clg="4 / span 9"
          cmd="4 / span 9"
          cxs="1 / span 12"
          csm="1 / span 12"
        >
          <Box isGridBox>
            <Stack 
              direction={isMobile ? "column" : "row"}
              positionX="spaceBX"
              positionY="startY"
              gap={isMobile ? "0.2rem" : "2rem"}
            >
              <img 
                  src='/cleanshot-20230206-at-2135-2@2x.png'
                  alt='avatar_background'
                  className={styles.avatarBg}
                />
              <InfoBox
                positionX="spaceBX"
                positionY="endY"
                wrapWithBox={false}
                titleAnimationDirection="X"
                titleAnimationoffset="calc(100% - 2rem)"
                excertAnimationDirection="X"
                excertAnimationoffset="calc(100% + 2rem)"
                titleText={(
                  <Fragment>
                    <b>Beautiful Design.</b>
                    <br />
                    <b>Earned Trust.</b>
                  </Fragment>
                )}
                excertText={(
                  <Fragment>
                  <b>Ergonomics. Design. UX/UI.</b>
                    <br />
                    {"Give your business a new dimension. Invest in your image."}
                    <br />
                    {"Enhance the user experience. Win new customers."}
                  </Fragment>
                )}
              />
            </Stack>
          </Box>
        </Grid.Item>
        <Grid.Item 
          clg="1 / span 9"
          cmd="1 / span 9"
          cxs="1 / span 12"
          csm="1 / span 12"
        >
          <Box extendStyles={styles.productivityBox} isGridBox>
            <Stack
              direction={isMobile ? "column" : "row"} 
              gap={'2rem'}
              positionX="spaceBX"
              positionY={isMobile ? "startY" : "centerY"}
            >
              <InfoBox 
                positionX="spaceBX"
                positionY="startY"
                wrapWithBox={false}
                titleAnimationDirection="X"
                titleAnimationoffset="calc(-100% - 3rem)"
                excertAnimationDirection="Y"
                excertAnimationoffset="calc(100% + 3rem)"
                titleText={(
                  <Fragment>
                    <b>Automatisation. </b>
                    <br />
                    <b>Productivity.</b>
                    <br />
                    <b>Enhancement.</b>
                  </Fragment>
                )}
                excertText={(
                  <Fragment>
                  <b>NoCode. Workflows. APIs.</b>
                    <br />
                    {"Automate repetitive tasks."}
                    <br />
                    {"Boost your profits."}
                  </Fragment>
                )}
              />
              <img 
                src="/photoautomatisation@2x.png"
                className={styles.image}
              />
            </Stack>
          </Box>
        </Grid.Item>
        <Grid.Item 
          clg="10 / span 3"
          cmd="10 / span 3"
          cxs="1 / span 12"
          csm="7 / span 6"
          rsm="2 / span 1"
        >
          <Image 
            src="/cleanshot-20230205-at-1742-1@2x.png"
            style={styles.matrixBackground}
          >
            <ProgressCircle
              progress={74}
            />
          </Image>
        </Grid.Item>
      </Grid>
    </SectionIntroBox>
  )
});

export default About