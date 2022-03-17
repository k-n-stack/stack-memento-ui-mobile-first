import React from "react";
import { motion } from "framer-motion";

import { 
  TechnoPack1, 
  TechnoPack2, 
  TechnoPack3, 
  TechnoPack4 
} from "Components/Icon/TechnoPack";
import Background             from "Components/Layout/Background";
import Icon                   from "Components/Icon/Icon";
import NavigationBar          from "Modules/NavigationBar";
import IntroParagraphsSlider  from "Modules/IntroParagraphsSlider";
import ThreadPreview          from "Modules/TheadPreview";
import FeaturesCarousel       from "Modules/FeaturesCarousel";

import "./Homepage.css";

const Homepage = () => {

  return (
    <>

      <Background />
      <NavigationBar />

      <div className="homepage-content">

        <div className="introduction">
          <div className="introduction-threads-preview-container">
            {/* black window */}
            <ThreadPreview /> 
          </div>
          <div className="introduction-container">
            <h2 className="introduction-header">Stack-Memento is a graphical bookmarks manager</h2>
            <IntroParagraphsSlider />
          </div>
        </div>      

        <div className="stats">
          <div className="stats-container">
            <div><h1>654</h1><p>Bookmarks</p></div>
            <div><h1>45</h1><p>Users</p></div>
            <div><h1>12</h1><p>Threads</p></div>
            <div><h1>99</h1><p>Tags</p></div>
          </div>
        </div>

        <>
          {/* style purpose divs */}
          <div className="background-dark-container"></div>
          <div className="separator-top"></div>
        </>

        <div className="features">
          <div className="features-carousel-selection-desk">
            <p>What is Stack-Memento</p>
            <p>Features and tools</p>
            <p>Social bookmarks manager</p>
          </div>
          <div className="features-container">
            {/* black window */}
            <div className="features-carousel">
              <FeaturesCarousel />
            </div>

            <div className="features-carousel-selection-hooked">
              <div><p>What is Stack-Memento ?</p></div>
              <div><p>Features and tools</p></div>
              <div><p>Sociable bookmark manager</p></div>
            </div>
          </div>
        </div>

        <div className="technologies">
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
        </div>


        <div className="medias">
          <div className="smartphone">
            <div className="smartphone-illustration"><Icon icon="Smartphone"/></div>
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

      </div>
    </>
  );
};

export default Homepage;