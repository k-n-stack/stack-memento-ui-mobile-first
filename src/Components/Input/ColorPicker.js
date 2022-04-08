import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setColor } from "Store/Features/newThreadSlice";

import "./ColorPicker.css";

const ColorPicker = (props) => {

  const dispatch = useDispatch();

  const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const colors = {
    clear: [
      { r: 244, g: 78, b: 59 },
      { r: 254, g: 146, b: 0 },
      { r: 252, g: 220, b: 0 },
      { r: 219, g: 223, b: 0 },
      { r: 164, g: 221, b: 0 },
      { r: 104, g: 204, b: 202 },
      { r: 115, g: 216, b: 255 },
      { r: 174, g: 161, b: 255 },
      { r: 253, g: 161, b: 255 },
    ],
    medium: [
      { r: 211, g: 49, b: 21 },
      { r: 226, g: 115, b: 0 },
      { r: 252, g: 196, b: 0 },
      { r: 176, g: 188, b: 0 },
      { r: 104, g: 188, b: 0 },
      { r: 22, g: 165, b: 165 },
      { r: 0, g: 156, b: 224 },
      { r: 123, g: 100, b: 255 },
      { r: 250, g: 40, b: 255 },
    ],
    dark: [
      { r: 159, g: 5, b: 0 },
      { r: 196, g: 81, b: 0 },
      { r: 251, g: 158, b: 0 },
      { r: 128, g: 137, b: 0 },
      { r: 25, g: 77, b: 51 },
      { r: 12, g: 121, b: 125 },
      { r: 0, g: 98, b: 177 },
      { r: 101, g: 50, b: 148 },
      { r: 171, g: 20, b: 158 },
    ],
  }

  const getMatrice = () => {
    return (
      <div className="colors-matrice">
        <div className="colors-tone">
          {
            colors.clear.map(function (color) {
              return (
                <div 
                  style={{
                    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
                  }}
                  className="color-picker-color"
                  onClick={() => {
                    dispatch(setColor(rgbToHex(color.r, color.g, color.b)));
                    if (props.inputColor !== undefined) {
                      props.inputColor(rgbToHex(color.r, color.g, color.b));
                    }
                    if (props.inputRef.current !== undefined) {
                      props.inputRef.current.value = rgbToHex(color.r, color.g, color.b);
                    }
                  }}
                >
                </div>
              );
            })
          }
        </div>
        <div className="colors-tone">
          {
            colors.medium.map(function (color) {
              return (
                <div 
                  style={{
                    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
                  }}
                  className="color-picker-color"
                  onClick={() => {
                    dispatch(setColor(rgbToHex(color.r, color.g, color.b)));
                    if (props.inputColor !== undefined) {
                      props.inputColor(rgbToHex(color.r, color.g, color.b));
                    }
                    if (props.inputRef.current !== undefined) {
                      props.inputRef.current.value = rgbToHex(color.r, color.g, color.b);
                    }
                  }}
                >
                </div>
              );
            })
          }
        </div>
        <div className="colors-tone">
          {
            colors.dark.map(function (color) {
              return (
                <div 
                  style={{
                    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
                  }}
                  className="color-picker-color"
                  onClick={() => {
                    dispatch(setColor(rgbToHex(color.r, color.g, color.b)));
                    if (props.inputColor !== undefined) {
                      props.inputColor(rgbToHex(color.r, color.g, color.b));
                    }
                    if (props.inputRef.current !== undefined) {
                      props.inputRef.current.value = rgbToHex(color.r, color.g, color.b);
                    }
                  }}
                >
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

  return (
    <div className="color-picker">
      {getMatrice()}
    </div>
  );
};

export default ColorPicker;