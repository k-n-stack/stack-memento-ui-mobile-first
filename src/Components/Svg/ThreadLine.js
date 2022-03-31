import React from "react";

const ThreadLine = (props) => {

  const {
    dotDiameter,
    lineTotalHeight,
    dotRadius,
    lineBottomY,
    threadColor,
    threadStrokeWidth,
    bottomDropGap,
    bottomDropLength
  } = props;

  return (
    <svg 
      width={`${dotDiameter}px`}
      height={`${lineTotalHeight}px`}
      viewBox={`0 0 ${dotDiameter} ${lineTotalHeight}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d={`M${dotRadius} ${dotRadius} L${dotRadius} ${lineBottomY}`}
        stroke={threadColor} 
        strokeWidth={threadStrokeWidth} 
        strokeLinecap="round"
      />
      <path
        d={`M${dotRadius} ${lineBottomY + bottomDropGap} L${dotRadius} ${lineBottomY + bottomDropGap + bottomDropLength}`}
        stroke={threadColor}
        strokeWidth={threadStrokeWidth}
        strokeLinecap="round"
      />
      <path
        d={`M${dotRadius} ${lineBottomY + bottomDropGap * 2 + bottomDropLength} L${dotRadius} ${lineBottomY + bottomDropGap * 2 + bottomDropLength * 2}`}
        stroke={threadColor}
        strokeWidth={threadStrokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ThreadLine;