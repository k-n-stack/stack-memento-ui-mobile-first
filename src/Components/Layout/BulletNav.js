import React from 'react';
import { motion } from 'framer-motion';

import "./BulletNav.css";

const BulletNav = (props) => {

  const idleColor = props.idleColor;
  const focusColor = props.focusColor;

  const setBullet = (bulletsNumber) => {

    if (bulletsNumber < 2 || !Number.isInteger(bulletsNumber)) {
      return <div>Bullet nav must have more than 1 bullet</div>
    }

    let bullets = [];

    for (; bulletsNumber > 0; --bulletsNumber) {
      bullets.unshift(
        <motion.div 
          className="bullet"
          style={{
            width: props.pxSize,
            height: props.pxSize,
          }}
          initial={{ backgroundColor: idleColor}}
          animate={{ backgroundColor: props.selected === bulletsNumber ? focusColor : idleColor }}
        ></motion.div>
      )
    }

    return bullets;

  };

  return (
    <div 
      className="bullet-nav-container"
      style={{ gap: props.pxGap }}
    >
      {setBullet(props.bulletNumber)}
    </div>
  );
};

export default BulletNav;