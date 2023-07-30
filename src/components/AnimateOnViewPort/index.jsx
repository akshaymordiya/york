import React, { useRef, useEffect, useState } from 'react'

const AnimateOnViewPort = ({
  children,
  extendAnimationStyles = "",
  setIsVisible,
  repeatObserver = false,
  ...props
}) => {

  const  containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          setIsVisible(true);
          if(!repeatObserver){
            observer.unobserve(entry.target)
          }
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    if(containerRef.current){
      observer.observe(containerRef.current)
    }

    return () => {
      if(containerRef.current){
        observer.unobserve(containerRef.current);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={extendAnimationStyles ?? "ref"}
      style={props?.isGridBox ? { display: "grid"} : {}}
    >
      {children}
    </div>
  )
}


const animateOnViewPortWrapper =(WrappedComponent, wrapperProps) => {
  return (props) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <AnimateOnViewPort isVisible={isVisible} setIsVisible={setIsVisible} {...props} {...wrapperProps}>
        <WrappedComponent 
          {...props} 
          isVisible={isVisible} setIsVisible={setIsVisible} 
        />
      </AnimateOnViewPort>
    );
  };
};

export default animateOnViewPortWrapper