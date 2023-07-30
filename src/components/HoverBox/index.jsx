import React, { useState } from 'react'

const HoverBox = ({
  children,
  onMouseEnter = null,
  onMouseLeave = null,
  extendStyle = "",
  removeDefaultStyle = false
}) => {

  const [isHoverd, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    if(onMouseEnter){
      onMouseEnter(e)
      return
    }

    setIsHovered(true);
  }
  
  const handleMouseLeave = (e) => {
    if(onMouseLeave){
      onMouseLeave(e);
      return 
    }
    
    setIsHovered(false)
  }

  const defaultStyle = {
    transform: isHoverd ? 'scale(0.95)' : 'scale(1)',
    transition: 'transform 0.3s ease',
    zIndex: '999999'
  }

  return (
    <div
      style={removeDefaultStyle ? {} : defaultStyle}
      className={extendStyle ?? ""}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

export default HoverBox