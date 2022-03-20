import React from "react";

const DivBackgroundLeft = () => {
  return (
    <div style={{width: "100%", height: "100%", position: "relative", zIndex: 3000}}>

      <div style={{
        position: "absolute",
        zIndex: 1,
        transform: "rotate(13.83deg)",
        width: "31%", height: "100%",
        left: "11.53%", top: "2.26%",
        borderRadius: "5px",
        background: "linear-gradient(180deg, #3C93AE 0%, rgba(60, 147, 174, 0) 115.01%)",
      }}/> 
      <div style={{
        position: "absolute",
        zIndex: 2,
        transform: "rotate(30.78deg)",
        width: "20%", height: "77%",
        left: "34.35%", top: "37.2%",
        borderRadius: "5px",
        background: "linear-gradient(170.98deg, #8A8FBF -30.02%, rgba(138, 143, 191, 0.433213) 87.61%, rgba(190, 138, 191, 0) 129.86%)",
      }}/>
      <div style={{
        position: "absolute",
        zIndex: 1,
        transform: "rotate(46.73deg)",
        width: "17%", height: "64%",
        left: "49.58%", top: "63.99%",
        borderRadius: "5px",
        background: "linear-gradient(164.51deg, #3650AB -120.07%, rgba(54, 80, 171, 0.952423) -67.98%, rgba(54, 80, 171, 0) 97.68%)"
      }}/>

    </div>
  )
};

export default DivBackgroundLeft;