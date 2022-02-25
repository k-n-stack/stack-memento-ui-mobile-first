import React, { useRef } from "react";

import "./Test.css";

const Test = () => {

  const testRef = useRef(null);

  const handleClick = () => {
    testRef.current.classList.toggle('testclass');
  };

  return (
    <div className="test">
      <div className="div1" onClick={() => handleClick()}>hello</div>
      <div className="div2" ref={testRef}>world</div>
    </div>
  );
};

export default Test;