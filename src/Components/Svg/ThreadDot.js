import React from "react";

const ThreadDot = (props) => {

  const {
    dotRadius,
    color,
    expandable,
    isExpand
  } = {...props}

  return (
    <svg 
      width={`${dotRadius * 2}px`}
      height={`${dotRadius * 2}px`}
      viewBox={`0 0 ${dotRadius * 2} ${dotRadius * 2}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle 
        cx={dotRadius} 
        cy={dotRadius} 
        r={dotRadius} 
        fill={`#${color}`}
      />
      {
        expandable !== undefined &&
        <line
          x1="7"
          y1="10"
  
          x2="13"
          y2="10"
  
          stroke="white" 
          stroke-width="3"
          stroke-linecap="round"
        />
      }
      {
        expandable !== undefined && !isExpand &&
        <line
          x1="10"
          y1="7"
  
          x2="10"
          y2="13"
  
          stroke="white" 
          stroke-width="3"
          stroke-linecap="round"
        />
      }
    </svg>
  )
};

export default ThreadDot;