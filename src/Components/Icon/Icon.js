import React from "react";

import { 
  Login,
  Magnifier,
  Mascot,
  Register,
  NavCircle,
  RobotCircle,
  Smartphone,
  Monitor,
  MascotColor,
  Planet,
  ArrowLeftCircle,
  Threads,
  Pinned,
  Friends,
  Groups,
  Global,
  Plus,
} from "Components/Icon/Svg";


const Icon = (props) => {

  const Svgs = {
    Mascot: Mascot,
    Login: Login,
    Register: Register,
    Magnifier: Magnifier,
    NavCircle: NavCircle,
    RobotCircle: RobotCircle,
    Smartphone: Smartphone,
    Monitor: Monitor,
    MascotColor: MascotColor,
    Planet: Planet,
    ArrowLeftCircle: ArrowLeftCircle,
    Threads: Threads,
    Pinned: Pinned,
    Friends: Friends,
    Groups: Groups,
    Global: Global,
    Plus: Plus,
  }

  const getSvg = (svgName) => {

    if (!(svgName in Svgs)) {
      return <div className="error-icon">{`Svg '${svgName}' do not match any Svg component name.`}</div>;
    }
    const SvgComponent = Svgs[svgName];
    return <SvgComponent iconColor={props.iconColor || "#000000"} />; 
  }

  return getSvg(props.icon);

};

export default Icon;