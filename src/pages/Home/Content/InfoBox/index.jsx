import React, { useContext } from 'react';

import Stack from '../../../../components/Stack';
Box
import Box from '../../../../components/Box';

import styles from "./Infobox.module.css";
import { BreakpointContext } from '../../../../context/breakpoint';
import animateOnViewPortWrapper from '../../../../components/AnimateOnViewPort';

const getStyle = (direction, offset, isVisible) => ({
  opacity: 1,
  transform: `translate${direction}(${isVisible ? "0" : offset})`,
  transition: 'transform 1.5s ease'
})

const InfoBox = ({
  titleText = <></>,
  excertText = <></>,
  positionX,
  positionY,
  extendStyles = "",
  children,
  isGridBox,
  wrapWithBox = true,
  isVisible,
  titleAnimationDirection = "X",
  titleAnimationoffset = "120px",
  excertAnimationDirection = "X",
  excertAnimationoffset = "120px"
}) => {

  const { activeBreakPoint = "lg" } = useContext(BreakpointContext);

  const isDesktop = ["xl", "xxl"].includes(activeBreakPoint);

  const titleStyle = getStyle(titleAnimationDirection, titleAnimationoffset, isVisible);

  const excertStyle = getStyle(excertAnimationDirection, excertAnimationoffset, isVisible);

  const renderStack = (
    <Stack 
    gap={isDesktop ? "4rem" : '2.3rem'} 
    positionX={positionX}
    positionY={positionY}
    > 
      {children}
      <h2 
        className={`${styles.title} ${styles[positionX]} ${styles[positionY]}`}
        style={titleStyle}
      >{titleText}</h2>
      <p 
        className={`${styles.excert} ${styles[positionX]} ${styles[positionY]}`}
        style={excertStyle}
      >{excertText}</p>
    </Stack>
  )
  if(!wrapWithBox){
    return renderStack
  }
  
  return (
    <Box extendStyles={extendStyles} isGridBox={isGridBox}>
     {renderStack}
    </Box>
  )
}

export default animateOnViewPortWrapper(InfoBox, { repeatObserver: false })