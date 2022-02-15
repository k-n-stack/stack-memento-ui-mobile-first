import React from "react";

import { 
  Login,
  Magnifier,
  Mascot,
  Register,
  NavCircle,
  RobotCircle,
} from "./Svg";

const Icon = (props) => {

  const Svgs = {
    Mascot: Mascot,
    Login: Login,
    Register: Register,
    Magnifier: Magnifier,
    NavCircle: NavCircle,
    RobotCircle: RobotCircle,
  }

  const getSvg = (svgName) => {
    if (!(svgName in Svgs)) {
      return <div className="error-icon">{`Svg '${svgName}' do not match any Svg component name.`}</div>;
    }
    const SvgComponent = Svgs[svgName];
    return <SvgComponent />; 
  }

  return getSvg(props.icon);

};

export default Icon;