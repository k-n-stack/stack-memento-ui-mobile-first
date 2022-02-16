import React from 'react';
import { motion } from 'framer-motion';

import "./BulletNav.css";

const BulletNav = (props) => {

  const idleColor = props.idleColor || "rgb(200, 200, 200)";
  const focusColor = props.focusColor || "rgb(81, 144, 204)";
  const pxSize = props.pxSize || "25px";

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
            width: pxSize,
            height: pxSize,
          }}
          initial={{ backgroundColor: idleColor}}
          animate={{ backgroundColor: props.selected === bulletsNumber ? focusColor : idleColor }}
          key={`bullet-nav-${bulletsNumber}`}
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