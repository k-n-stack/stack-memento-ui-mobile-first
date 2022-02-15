import React from "react";

import Background from "../Components/Layout/Background";
import Navigation from "../Modules/Navigation";
import IntroFooterCarousel from "../Components/Layout/IntroFooterCarousel";
import DarkSmokeLayer from "../Components/Layout/DarkSmokeLayer";

import "./Homepage.css";
import TechnoPackPortait from "../Components/Icon/TechnoPackPortait";

const Homepage = () => {
  return (
    <>
      <Background />
      <Navigation />

      <div className="homepage-view-content">
        <IntroFooterCarousel />
      </div>

      <div className="quick-stats">
        <div><h1>654</h1><p>Bookmarks</p></div>
        <div><h1>45</h1><p>Users</p></div>
        <div><h1>12</h1><p>Threads</p></div>
        <div><h1>99</h1><p>Tags</p></div>
      </div>

      <DarkSmokeLayer />

      <div className="features">
        <div className="features-carousel"></div>
        <div className="features-carousel-selection">
          <p>What is Stack-Memento ?</p>
          <p>Features and tools</p>
          <p>Sociable bookmark manager</p>
        </div>
      </div>

      <div className="technologies-header">
        <h2>Covered technologies</h2>
        <p>The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element</p>
      </div>

      <div>
        <TechnoPackPortait />
      </div>

      <div className="bottom-margin"></div>

    </>
  );
};

export default Homepage;