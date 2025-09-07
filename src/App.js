import React from "react";
import background from "./images/debian_background_01.png";
import mouse from "./images/mouse.png"
import Navbar from "./Navbar"
import Terminal from './Terminal';

function App() {
  return (
    <div 
      style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      overflow: "hidden",
      width: "100vw",
      height: "100vh",
      margin: 0,
      cursor: `url(${mouse}), auto`,
    }}
    >
      <Terminal />
      <Navbar />

    </div>
  );

}

export default App;