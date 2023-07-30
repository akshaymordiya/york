import React, { Fragment, useContext } from 'react';

import styles from "./Grid.module.css";

import { BreakpointContext } from '../../context/breakpoint';

const Grid = ({ 
  noGutters = false,
  gap,
  extendStyle = "",
  children
}) => {

  return (   
    <div 
      className={` 
      ${styles.gridContainer} ${noGutters ? styles.noGutters : ""}
      ${extendStyle ?? ""}
      `} 
      style={ gap ? { gap } : {}}
    >
      {React.Children.map(children, (child, index) => (
        <Fragment key={index}>
          {child}
        </Fragment>
      ))}
    </div>
  );
};

Grid.Item = ({ 
  children,
  extendStyle = "",
  ...props
}) => {

  const {
    activeBreakPoint = "lg"
  } = useContext(BreakpointContext);

  const breakpointColumnValues = props[`c${activeBreakPoint}`] || props['clg'];
  const breakpointRowValues = props[`r${activeBreakPoint}`] || props['rlg'];

  const itemStyle = {}

  if(breakpointColumnValues){
    itemStyle['gridColumn'] = breakpointColumnValues
  }

  if(breakpointRowValues){
    itemStyle['gridRow'] = breakpointRowValues
  }
  
  return (
    <div className={` ${styles.gridItem} ${extendStyle ?? ""}
    `} style={{...itemStyle}}>{children}</div>
  );
};

export default Grid;
