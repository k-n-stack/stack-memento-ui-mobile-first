import React from "react";

const ThreadDot = (props) => {
  return (
    <svg 
      width={`${props.dotDiameter}px`}
      height={`${props.dotDiameter}px`}
      viewBox={`0 0 ${props.dotDiameter} ${props.dotDiameter}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle 
        cx={props.dotRadius} 
        cy={props.dotRadius} 
        r={props.dotRadius} 
        fill={props.threadColor}
      />
    </svg>
  )
};

export default ThreadDot;