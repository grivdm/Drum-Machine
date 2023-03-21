import React from "react";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setVolume } from "../slices/VolumeSlice";
import { setDisplayValue } from "../slices/DisplaySlice";

const VolumeRange = () => {
  const volume = useSelector((state) => state.volume.volume);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setVolume(e.target.value));
    dispatch(setDisplayValue(`Volume: ${Math.round(e.target.value * 100)}%`));
  };
  return (
    <Form id="volume" className="mt-sm-3 ">
      <Form.Group controlId="formBasicRange">
        <Form.Range
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};

export default VolumeRange;
