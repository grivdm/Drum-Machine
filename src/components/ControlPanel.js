import React from "react";
import Display from "./Display";
import VolumeRange from "./VolumeRange";

const ControlPanel = () => {
  return (
    < 
    >
    <div
      className="
    control-panel 
    position-relative
    d-block
    col-12 
    col-sm-3 
    d-flex 
    flex-column 
    p-sm-1 
    h-100
    h-sm-50
    align-items-center
    d-sm-block d-none
    "
    >
      <Display />
      <VolumeRange />

      <div
        className="position-absolute bottom-0 text-secondary"
        style={{
          fontSize: "0.7rem",
        }}
      >
        made with <i className="bi bi-heart-fill text-danger"></i> by{" "}
        <a href="https://github.com/grivdm">grivdm</a>
      </div>

      
    </div>

    <div
      className="
    align-items-center
    d-sm-none d-block
    "
    style={
      {
        width: "100%",
      }
    }
    >
      <Display />
      
    </div>
    </>
  );
};

export default ControlPanel;
