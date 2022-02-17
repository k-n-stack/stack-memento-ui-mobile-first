import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import BulletNav from "Components/Layout/BulletNav";

import "./IntroParagraphsSlider.css";

import fakeData from "Components/Ressources/Static/fakeData.json";

const IntroParagraphsSlider = () => {
  
  const [selectedBullet, setSelectedBullet] = useState(1);
  const [animationState, setAnimationState] = useState("idle");
  const bulletNumber = 4;
  const _fakeData = fakeData.homepageHeaderText;

  const variants = {
    carousel: {
      swipeRight: {
        opacity: [null, 0, 0],
        x: [null, 100, -100],
        transition: {
          x: {
            duration: 0.15,
            times: [0, 1, 1],
          },
          opacity: {
            duration: 0.15,
            times: [0, 1, 1],
          }
        },
      },
      swipeLeft: {
        opacity: [null, 0, 0],
        x: [null, -100, 100],
        transition: {
          x: {
            duration: 0.15,
            times: [0, 1, 1],
          },
          opacity: {
            duration: 0.15,
            times: [0, 1, 1],
          },
        },
      },
      idle: {
        opacity: [null, 1],
        x: 0,
        transition: {
          x: {
            duration: 0.5,
          },
          opacity: {
            duration: 0.7,
          }
        },
      },
    }
  };
  
  const swipeHandler = useSwipeable({
    onSwiped: (event) => { 
      handleSwipeAnimation(event.dir) 
    }
  });

  const handleSwipeAnimation = (action) => {
    if (action === "Right" && selectedBullet > 1) {
      setAnimationState("swipeRight");
    } else if (action === "Left" && selectedBullet < bulletNumber) {
      setAnimationState("swipeLeft");
    }
  }

  const updateSelectedBullet = (direction) => {
    switch (direction) {
      case 'swipeRight' :
        if (selectedBullet > 1) {
          setSelectedBullet(selectedBullet - 1);
        }
        break;
      case 'swipeLeft' :
        if (selectedBullet < bulletNumber) {
          setSelectedBullet(selectedBullet + 1);
        }
      break;
      default :
      break;
    }
  }

  return (
    <div 
      className="introduction-paragraphs-slider-container"
      {...swipeHandler}
    >
      <div className="introduction-paragraphs-text">
        <h3>Welcome to stack memento !</h3>
        <motion.p 
          animate={animationState}
          initial={variants.carousel.idle}
          variants={variants.carousel}
          onAnimationComplete={(direction) => {
            updateSelectedBullet(direction);
            setAnimationState("idle");
          }}
        >
          {_fakeData[selectedBullet - 1]}
        </motion.p>
      </div>
      <div className="introduction-paragraphs-slider-remainder">
        <BulletNav 
          bulletNumber={bulletNumber}
          pxGap="15px"
          pxSize="15px"
          selected={selectedBullet}
        />
      </div>
    </div>
  );
};

export default IntroParagraphsSlider;