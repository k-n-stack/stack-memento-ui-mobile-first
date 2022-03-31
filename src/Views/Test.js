import React, { useRef } from "react";

import "./Test.css";

const Test = () => {

  const testRef = useRef(null);

  const handleClick = () => {
    testRef.current.classList.toggle('testclass');
  };

  return (
    <>
      <div>hello mama</div>
    </>
  );
};

export default Test;