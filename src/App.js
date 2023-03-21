import "./App.css";
import React from "react";
import MainPage from "./MainPage";
import randomColor from "randomcolor";

function App() {
  return (
    <div
      className="App
      d-flex
      justify-content-center
      align-items-center
      flex-column
      position-relative
      "
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: randomColor({
          luminosity: "light",
          hue: "random",
        }),
      }}
    >
      <MainPage />
    </div>
  );
}

export default App;
