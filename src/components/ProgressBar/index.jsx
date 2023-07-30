import React, { useState, useEffect, useMemo } from 'react';

import animateOnViewPortWrapper from '../AnimateOnViewPort';

import styles from "./Progress.module.css";

const loadingDuration = 3000

const formateNumber = (number) => {
  /* since we are using static data here this logic may not return accurate result each times */
  const split = String(number).split(".");
  const flotValues = split[1].split('');
  const twoDigits = flotValues.slice(0, 2);
  const text = split[0] + '.' + twoDigits.join('');
  return parseFloat(text); 
}

const ProgressCircle = ({
  progress,
  gradientColors = ['#9AED5C', '#78E25B', '#57DA5F', '#34C96A', '#1DBD73'],
  trailColor = '#E4E4E8',
  isVisible,
  fixAmount
}) => {

  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [amount, setAmount] = useState(0);

  const isAnimationCompleted = useMemo(() => {
    return animatedProgress >= progress
  }, [animatedProgress, progress])

  useEffect(() => {
    let loadingTimeout;
    const amountInterval = (fixAmount / progress) * 2;
    if(isVisible){
      if(animatedProgress <= progress) {
        loadingTimeout = setTimeout(() => {
          setAnimatedProgress(animatedProgress + 2)
          const sum = amount + amountInterval
          setAmount(formateNumber(sum))
        }, loadingDuration/100)
      }
      
      return () => {
        clearTimeout(loadingTimeout)
      }
    } else {
      setAnimatedProgress(0)
      setAmount(0)
    }
  }, [isVisible, animatedProgress]);

  const {
    strokeWidth,
    diameter,
    center,
    radius,
    dashArray,
    dashOffset
  } = useMemo(() => {
    const strokeWidth = 11;
    const diameter = 100;
    const center = diameter / 2;
    const radius = center - strokeWidth;
    const dashArray = 2 * Math.PI * radius;
    const dashOffset = dashArray * ((100 - animatedProgress) / 100);
   
    return {
      strokeWidth,
      diameter,
      center,
      radius,
      dashArray,
      dashOffset
    }
  }, [animatedProgress])

  return (
    <div
      className={styles.container}
      style={{
        width: diameter,
        height: diameter,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${diameter} ${diameter}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke={trailColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke={`url(#gradient)`}
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      <defs>
        <linearGradient id="gradient">
          {gradientColors.map((color, index) => (
            <stop key={index} offset={`${(index / (gradientColors.length - 1)) * 100}%`} stopColor={color} />
          ))}
        </linearGradient>
      </defs>
      </svg>

      {/* Texts */}

     
      <div
        className={styles.textBox}
      >
        <p>
          <span>$</span>
          {amount}
        </p>
        <span>Card Balance: <b>$1682.55</b></span>
        <span>No Interest charges</span>
      </div>
      <div className={`${styles.checkMarkBox} ${isAnimationCompleted ? styles.completed : ""}`}>
        <div className={styles.greenBox}>
          <img src='/check.png' />
        </div>
      </div>

      <div className={styles.topDotBox}>
        <div className={styles.dot} />
      </div>

      <div className={`${styles.topDotBox} ${styles.bgWhite}`}>
      </div>

      <div className={`${styles.dotOne} ${styles.dot} ${isAnimationCompleted ? styles.completed : ""}`} />
      <div className={`${styles.dotTwo} ${styles.dot} ${isAnimationCompleted ? styles.completed : ""}`} />
    </div>
  );
};

export default animateOnViewPortWrapper(ProgressCircle, { repeatObserver: true });
