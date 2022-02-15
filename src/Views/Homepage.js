import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import Background from "../Components/Layout/Background";
import Navigation from "../Modules/Navigation";
import IntroFooterCarousel from "../Components/Layout/IntroFooterCarousel";
import DarkSmokeLayer from "../Components/Layout/DarkSmokeLayer";
import BulletNav from "../Components/Layout/BulletNav";
import {
  TechnoPackAnimate1, 
  TechnoPackAnimate2, 
  TechnoPackAnimate3, 
  TechnoPackAnimate4, 
} from "../Components/Icon/TechnoPackAnimate";

import "./Homepage.css";
import Icon from "../Components/Icon/Icon";

const Homepage = () => {

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const _controlss = [controls1, controls2, controls3, controls4];
  const _durations = [40, 30, 20, 10];

  const getAnimateProps = (duration) => {
    return {
      x: "-50%",
      transition: {
        x: {
          repeat: Infinity,
          duration: duration,
          ease: "linear",
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', (event) => {
      _controlss.forEach((value) => value.stop());
    });

    _controlss.forEach((value, index) => value.start(getAnimateProps(_durations[index])));
  }, []);

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
          <div><p>What is Stack-Memento ?</p></div>
          <div><p>Features and tools</p></div>
          <div><p>Sociable bookmark manager</p></div>
        </div>
      </div>

      <div className="technologies-header">
        <h2>Covered technologies</h2>
        <p>The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element</p>
      </div>

      <div 
        className="technologies-list-animation-container"
        onClick={() => { _controlss.forEach((value) => value.stop()) }}
      >
        <motion.div className="technologies-list-animation" animate={controls1}>
          <div><TechnoPackAnimate1 /></div>
          <div><TechnoPackAnimate1 /></div>
        </motion.div>
        <motion.div className="technologies-list-animation" animate={controls2}>
          <div><TechnoPackAnimate2 /></div>
          <div><TechnoPackAnimate2 /></div>
        </motion.div>
        <motion.div className="technologies-list-animation" animate={controls3}>
          <div><TechnoPackAnimate3 /></div>
          <div><TechnoPackAnimate3 /></div>
        </motion.div>
        <motion.div className="technologies-list-animation" animate={controls4}>
          <div><TechnoPackAnimate4 /></div>
          <div><TechnoPackAnimate4 /></div>
        </motion.div>
      </div>

      <div className="medias">
        <div className="smartphone">
          <div className="smartphone-illustration"><Icon icon="Smartphone" /></div>
          <div className="smartphone-text">
            <h3>Mobile App is comming soon !</h3>
            <p>The href value. If you cannot provide an href, but.</p><br/>
            <p>asset static/js/bundle.js 2.84 MiB [emitted] (name: main) 1 related asset asset main.5f35c733e16550ffe895.hot-update. asset main.5f35c733e16550ffe895.hot-update.js 22.9 KiB [emitted] [immutable] [hmr] (name: main) 1 related asset</p>
          </div>
        </div>
        <div className="monitor">
          <div className="monitor-illustration"><Icon icon="Monitor" /></div>
          <div className="monitor-text">
            <h3>Desktop App</h3>
            <p>The href value. If you cannot provide an href, but.</p><br/>
            <p>asset static/js/bundle.js 2.84 MiB [emitted] (name: main) 1 related asset asset main.5f35c733e16550ffe895.hot-update. asset main.5f35c733e16550ffe895.hot-update.js 22.9 KiB [emitted] [immutable] [hmr] (name: main) 1 related asset</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;