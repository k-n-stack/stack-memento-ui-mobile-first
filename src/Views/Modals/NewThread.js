import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

import ColorPicker from "Components/Input/ColorPicker";

import { setColor } from "Store/Features/newThreadSlice";

import "./NewThread.css";
import LineInput from "Components/Input/LineInput";
import { useDispatch, useSelector } from "react-redux";
import Button from "Components/Input/Button";
import GroupCarousel from "Components/Input/GroupCarousel";
import { postThread } from "Store/Features/userSlice";
import { setStatus } from "Store/Features/userSlice";

const NewThread = () => {

  const dispatch = useDispatch();
  const color = useSelector((state) => (state.newThread.color));
  const subscribedGroups = useSelector((state) => (state.user.subscribedGroups));
  const ownGroups = useSelector((state) => (state.user.ownGroups));
  const friends = useSelector((state) => (state.user.friends));
  const status = useSelector((state) => (state.user.status));
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [inputColor, setInputColor] = useState('');
  const [inputRef, setInputRef] = useState(null);
  const [selectedButton, setSelectedButton] = useState(3);
  const [title, setTitle] = useState("");
  const [showError, setShowError] = useState(false);
  const control = useAnimation();
  const nameRef = useRef();

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
  };

  const errorMessageAnimation = {
    x: [-10, 10, -10, 10, 0],
    opacity: [1, 1, 0],
    transition: {
      x: {
        duration: 0.5, 
        times: [0, 0.4, 0.6, 0.8, 1] 
      },
      opacity: {
        duration: 4.5,
        times: [0, 0.85, 1],
      }
    },
  };

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

  const getVisibilityEnumValue = (index) => {
    const _enum = ['control', 'public', 'shareable', 'private'];
    return _enum[index];
  }

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) {
      setShowError(true);
    } else {
      dispatch(postThread({
        color: color.substr(1),
        title: title,
        visibility: getVisibilityEnumValue(selectedButton),
      }));
    }
  }

  useEffect(() => {
    if (showError) {
      control.start(errorMessageAnimation);
      setShowError(false);
    }
    if (status === "thread added") {
      setTitle("");
      nameRef.current.value = "";
      dispatch(setStatus(''));
    }
  });

  return (
    <>
      <div className="new-thread">
        <div className="new-thread-color">
          <motion.div 
            className="new-thread-color-picker"
            variants={variants.colorPicker}
            initial={variants.colorPicker.hide}
            animate={showColorPicker ? "show" : "hide"}
            onClick={() => {
                setShowColorPicker(false);
              }}
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
            <input 
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              ref={nameRef}
            />
          </div>

          <div className="new-thread-form-visibility">
            <label>Visibility :</label>
            {getButtonsGroup()}
            <div className="new-thread-visibility-description">
              {buttons[selectedButton].description}
            </div>
          </div>

          <div className="new-thread-groups-carousel">
            <label>Add or suggest to group :</label>
            <div className="new-thread-groups-groups">
              <div>
                <div>Subscribed group(s)</div>
                <GroupCarousel groups={subscribedGroups}/>
              </div>
              <div>
                <div>Owned group(s)</div>
                <GroupCarousel groups={ownGroups} />
              </div>
            </div>
          </div>

          <div className="new-thread-groups-carousel">
            <label>Share with fellows :</label>
            <div className="new-thread-friends-group">
              <div>
                <GroupCarousel groups={friends}/>
              </div>
              <div className="new-thread-button-container">
                <Button 
                  noIcon 
                  buttonText="Add thread"
                  onClick={handleSubmit}
                />
                <motion.div 
                  animate={control}
                  className="new-thread-error"
                >
                  Please, provide a thread name
                </motion.div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </>
  );
}

export default NewThread;