import React from "react";

const DivBackgroundRight = () => {
  return (
    <div style={{width: "100%", height: "100%", position: "relative"}}>

      <div style={{
        position: "absolute",
        zIndex: 1,
        transform: "rotate(-15.12deg)",
        width: "37%", height: "100%",
        left: "24.96%", top: "3.06%",
        borderRadius: "5px",
        background: "linear-gradient(170.98deg, #8A8FBF -30.02%, rgba(138, 143, 191, 0.433213) 87.61%, rgba(190, 138, 191, 0) 129.86%)",
      }}/> 
      <div style={{
        position: "absolute",
        zIndex: 2,
        transform: "rotate(-31.89deg)",
        width: "28.65%", height: "59.06%",
        left: "13.44%", top: "33.23%",
        borderRadius: "5px",
        background: "linear-gradient(192.68deg, #1E3BA2 17.11%, rgba(54, 80, 171, 0) 119.59%)",
      }}/>
      <div style={{
        position: "absolute",
        zIndex: 1,
        transform: "rotate(-8.19deg)",
        width: "25.41%", height: "80.91%",
        left: "43%", top: "42%",
        borderRadius: "5px",
        background: "linear-gradient(20.86deg, #3C93AE -66.36%, rgba(60, 147, 174, 0) 140.87%)",
      }}/>

    </div>
  )
};

export default DivBackgroundRight;