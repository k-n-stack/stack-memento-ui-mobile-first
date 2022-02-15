import React from "react";

import "./IntroFooterCarousel.css";

const IntroFooterCarousel = () => {
  return (
    <>
      <h2 className="intro-footer-header">Stack-Memento is a graphical bookmarks manager</h2>
      <div className="intro-footer-container">

        <div className="intro-text">
          <h3>Welcome to stack memento !</h3>
          <p>Be aware that this website first purpose is for learning web development techniques.</p>
          <p>This front page have been developed with React, Redux, and other libraries such as framer-motion, react-swiper, react router and much more !</p>
          <p>For full description of technologies please check our "About" page.</p><br/>
          <p>If you feel more adventureous, feel free to search about a thread subject with the input below our mascot</p>
          <p>For the bravest, account creation is available !</p>
        </div>


        
      </div>
    </>
  );
};

export default IntroFooterCarousel;