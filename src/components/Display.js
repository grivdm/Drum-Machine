import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayValue } from "../slices/DisplaySlice";

const Display = () => {
  const dispatch = useDispatch();
  const displayValue = useSelector((state) => state.display.displayValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setDisplayValue(""));
    }, 2000);
    return () => clearTimeout(timer);
  }, [displayValue]);

  return (
    <div
      id="display"
      className="
        border
        border-1
        rounded
        border-secondary
        p-2
        my-1
        overflow-hidden
        d-flex  
        position-relative
        align-items-center
        justify-content-center
        h-25
        "
      style={{
        backgroundColor: "#333333",
      }}
    >
      <p
        className="
        text-light
        text-center
        p-0
        m-0
        small  
        position-absolute
    "
      >
        {displayValue}
      </p>
    </div>
  );
};

export default Display;
