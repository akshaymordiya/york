
import { useEffect, useMemo, useState } from "react";

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1840,
  xxl: 2000
}

const useBreakpoints = () => {

  const values = Object.keys(breakpoints).reduce((acc, key) => ({
    ...acc,
    [key]: false
  }), {});

  const [breakpointValues, setBreakpointValues] = useState(values);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const breakpointKeys = Object.keys(breakpoints);
  
      for (let i = breakpointKeys.length - 1; i >= 0; i--) {
        const breakpoint = breakpointKeys[i];
  
        const breakpointWidth = breakpoints[breakpoint];
        if (windowWidth >= breakpointWidth) {
          setBreakpointValues(prev => ({
            ...prev,
            ...values,
            [breakpoint]: true,
          }));
          break;
        }
      }
  
    };

    handleResize()

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const activeBreakPoint = useMemo(() => {
    return Object.keys(breakpointValues).find(key => breakpointValues[key]);
  }, [breakpointValues]);

  return {
    breakpointValues,
    activeBreakPoint
  }
}

export default useBreakpoints;