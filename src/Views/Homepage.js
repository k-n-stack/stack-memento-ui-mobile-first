import React from "react";
import { motion } from "framer-motion";

import Background from "../Components/Layout/Background";
import Navigation from "../Modules/Navigation";
import IntroFooterCarousel from "../Components/Layout/IntroFooterCarousel";
import DarkSmokeLayer from "../Components/Layout/DarkSmokeLayer";
import ThreadPreview from "../Modules/TheadPreview";
import Icon from "../Components/Icon/Icon";
import { 
  TechnoPack1, 
  TechnoPack2, 
  TechnoPack3, 
  TechnoPack4 
} from "../Components/Icon/TechnoPack";

import "./Homepage.css";

import "./test.css";

const Homepage = () => {

  return (
    <>
      <Background />
      <Navigation />

      <div className="homepage-content">
        <div className="top-header-container">
          <div className="thread-preview-container">
            <ThreadPreview /> 
          </div>
          <div className="homepage-view-content">
            <IntroFooterCarousel />
          </div>
        </div>      

        <div className="quick-stats">
          <div><h1>654</h1><p>Bookmarks</p></div>
          <div><h1>45</h1><p>Users</p></div>
          <div><h1>12</h1><p>Threads</p></div>
          <div><h1>99</h1><p>Tags</p></div>
        </div>

        <div class="dark-smoke-layer-container">
          <DarkSmokeLayer />
        </div>

        <div className="features">
          <div className="features-carousel"></div>
          <div className="features-carousel-selection">
            <div><p>What is Stack-Memento ?</p></div>
            <div><p>Features and tools</p></div>
            <div><p>Sociable bookmark manager</p></div>
          </div>
        </div>

        <div className="technologies-header">
          <h2>Covered technologies</h2>
          <p>From front to back technologis, Stack-Memento can cover as many stacks knowledge as you want.<br/><br/>By default Stack-memento have default thread about web development, but you are free to make custom thread.</p>
        </div>

        <div className="technologies-icons-container">
          <motion.div 
            className="technologies-icons" 
            drag="x"
            dragConstraints={{ left: -500, right: 500}}
            dragElastic={0.2}
          >
            <TechnoPack1 />
            <TechnoPack2 />
            <TechnoPack3 />
            <TechnoPack4 />
          </motion.div>
        </div>

        <div className="medias">
          <div className="smartphone">
            <div className="smartphone-illustration"><Icon icon="Smartphone" /></div>
            <div className="smartphone-text">
              <h3>Mobile App comming soon !</h3>
              <p>With memento take away, just get your centralized favorite links everywhere with your smartphone.<br/><br/>(Application still in development state)</p>
            </div>
          </div>
          <div className="monitor">
            <div className="monitor-illustration"><Icon icon="Monitor" /></div>
            <div className="monitor-text">
              <h3>Desktop App</h3>
              <p>Centralize Your bookmark with 2 touch.</p><br/>
              <p>With memento-clip, focus on any url and stock your bookmark with a customizable shortcut.<br/><br/>(Application still in development state.)</p>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-content">© 2022 KHIN Nicolas</div>
        </div>

        <div className="homepage-margin-bottom"></div>

      </div>
    </>
  );
};

export default Homepage;