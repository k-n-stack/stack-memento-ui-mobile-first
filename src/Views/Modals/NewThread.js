import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import ColorPicker from "Components/Input/ColorPicker";

import { setColor } from "Store/Features/newThreadSlice";

import "./NewThread.css";
import LineInput from "Components/Input/LineInput";
import { useDispatch, useSelector } from "react-redux";
import Button from "Components/Input/Button";

const NewThread = () => {

  const dispatch = useDispatch();
  const color = useSelector((state) => (state.newThread.color));
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [inputColor, setInputColor] = useState('');
  const [inputRef, setInputRef] = useState(null);
  const [selectedButton, setSelectedButton] = useState(3);

  const variants = {
    colorPicker: {
      hide: {
        opacity: 0,
        x: 30,
        display: "none",
        transition: {
          display: {
            delay: 0.5,
          }
        }
      },
      show: {
        opacity: 1,
        x: 0,
        display: "block",
      }
    },
    button: {
      selected: {
        opacity: 1,
      },
      notSelected: {
        opacity: 0.5,
      },
    }
  }

  const buttons = [
    { 
      name: "public",
      text: "Public - under control",
      description: <p>Public under control thread will <strong>appear in Global</strong>. Comment in bookmark will <strong>not be shown publicly without your agreement</strong>.</p>,
    },
    { 
      name: "fullPublic",
      text: "Public - without control",
      description: <p>Public without control thread will <strong>appear in Global</strong>. All Comments will be show directly <strong>without prior agreement</strong>.</p>,
    },
    { 
      name: "private",
      text: "Private - shareable",
      description: <p>Private shareable thread will not appear in Global. Thead <strong>can be shared</strong> with your fellows and <strong>is subscribeable</strong> to groups.</p>,
    },
    { 
      name: "fullPrivate",
      text: "Full private",
      description: <p>Full Private thread will not appear in Global, are <strong>not shareable</strong> with fellows and <strong>cannot subscribe</strong> to groups.</p>,
    },
  ];

  const checkColor = () => {
    if (inputColor.match(/^#[0-9a-f]{6}$/)) {
      dispatch(setColor(inputColor));
    } else {
      if (inputRef.current !== undefined) {
        inputRef.current.value = "";
      }
    }
  }

  const getInputRef = (ref) => {
    setInputRef(ref);
  }

  const setInputColorString = (color) => {
    setInputColor(color);
  }

  const getButtonsGroup = () => {
    return (
      <div className="new-thread-form-visibility-buttons-group">
        {
          buttons.map(function (button, index) {
            return (
              <motion.div
                variants={variants.button}
                initial={variants.button.notSelected}
                animate={selectedButton === index ? "selected" : "notSelected"}
              >
                <Button 
                  noIcon 
                  buttonText={button.text}
                  onClick={(event) => {
                    event.preventDefault();
                    setSelectedButton(index);
                  }}
                />
              </motion.div>
            );
          })
        }
      </div>
    );
  }

  return (
    <>
      <div className="new-thread">
        <div className="new-thread-color">
          <motion.div 
            className="new-thread-color-picker"
            variants={variants.colorPicker}
            initial={variants.colorPicker.hide}
            animate={showColorPicker ? "show" : "hide"}
          >
            <ColorPicker 
              inputRef={inputRef}
              inputColor={setInputColorString}
            />
          </motion.div>
          <div 
            className="new-thread-color-sample"
            style={{
              backgroundColor: color,
            }}
            onClick={() => setShowColorPicker(!showColorPicker)}
          >
          </div>
          <div className="new-thread-color-input">
            <LineInput 
              placeholder={color}
              onChange={setInputColor}
              onBlur={checkColor}
              getInputRef={getInputRef}
            />
          </div>
        </div>
        <form className="new-thread-form">

          <div className="new-thread-form-name">
            <label>Thread name :</label>
            <input/>
          </div>

          <div className="new-thread-form-visibility">
            <label>Visibility :</label>
            {getButtonsGroup()}
            <div className="new-thread-visibility-description">
              {buttons[selectedButton].description}
            </div>
          </div>

        </form>
      </div>
    </>
  );
}

export default NewThread;