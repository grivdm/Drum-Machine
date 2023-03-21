import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayValue } from "../slices/DisplaySlice";

const DrumPad = ({ sound }) => {
  const volume = useSelector((state) => state.volume.volume);
  const dispatch = useDispatch();
  const [pressed, setPressed] = useState(false);
  const playSound = () => {
    dispatch(setDisplayValue(sound.name));
    const audio = document.getElementById(sound.id);
    audio.currentTime = 0;
    audio.volume = volume;
    audio.play();
  };

  const handleClick = () => {
    playSound();
  };

  const handleKeyDown = (event) => {
    if (event.key.toUpperCase() === sound.id) {
      setPressed(true);
      playSound();
    }
  };

  const handleKeyUp = (event) => {
    if (event.key.toUpperCase() === sound.id) {
      setPressed(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return (
    <Button
      onClick={handleClick}
      variant={pressed ? "secondary" : "light"}
      size="lg"
      id={sound.name}
      className="
      drum-pad 
        col-3
        p-sm-2
        p-0
        m-1
        border
        border-1
        border-secondary
        "
      style={{
        boxShadow: "5px 3px  rgba(0, 0, 0, .7)",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="letter p-0 m-0"
        style={{
          fontSize: "1.5rem",
        }}
      >
        {sound.id}
      </div>
      <audio className="clip" id={sound.id} src={sound.src} />
    </Button>
  );
};

export default DrumPad;
