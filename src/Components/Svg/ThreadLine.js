import React from "react";

const ThreadLine = (props) => {

  const {
    lineTotalHeight,
    dotRadius,
    lineBottomY,
    color,
    threadStrokeWidth,
    bottomDropGap,
    bottomDropLength
  } = {...props};

  return (
    <svg 
      width={`${dotRadius * 2}px`}
      height={`${lineTotalHeight}px`}
      viewBox={`0 0 ${dotRadius * 2} ${lineTotalHeight}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d={`M${dotRadius} ${dotRadius} L${dotRadius} ${lineBottomY}`}
        stroke={`#${color}`} 
        strokeWidth={threadStrokeWidth} 
        strokeLinecap="round"
      />
      <path
        d={`M${dotRadius} ${lineBottomY + bottomDropGap} L${dotRadius} ${lineBottomY + bottomDropGap + bottomDropLength}`}
        stroke={`#${color}`} 
        strokeWidth={threadStrokeWidth}
        strokeLinecap="round"
      />
      <path
        d={`M${dotRadius} ${lineBottomY + bottomDropGap * 2 + bottomDropLength} L${dotRadius} ${lineBottomY + bottomDropGap * 2 + bottomDropLength * 2}`}
        stroke={`#${color}`} 
        strokeWidth={threadStrokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ThreadLine;