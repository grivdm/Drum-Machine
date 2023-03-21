import React from "react";
import DrumPad from "./DrumPad";
import { useSelector} from "react-redux";
import ControlPanel from "./ControlPanel";

const DrumMachine = () => {
  const sounds = useSelector((state) => state.sounds.sounds);

  const soundsMap = sounds.map((sound) => {
    return <DrumPad key={sound.id} sound={sound} />;
  });

  return (
    <div
      className="d-flex
        position-relative
        justify-content-center
        flex-column
        border
        border-3
        rounded
        p-2
        h-100
        "
      style={{
        backgroundColor: "#EEEEEC",
        boxShadow: "7px 7px rgba(0, 0, 0, .2)",
      }}
    >
      <div
        id="drum-machine"
        className="d-flex
        position-relative
        flex-column
        flex-sm-row
        p-0
        justify-content-between
        align-items-center
        h-100
        w-100"
      >
        <div
          id="drum-pads"
          className="d-inline-flex
          justify-content-center
          flex-wrap
          border
          border-1
          rounded
          border-secondary
          p-2
          m-2
          bg-light
          col-12
          col-sm-8
          "
        >
          {soundsMap}
        </div>
        <ControlPanel />
      </div>
    </div>
  );
};

export default DrumMachine;
