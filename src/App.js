import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [myColor, setMyColor] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const c = "#" + randomColor;
    setMyColor(c);
  };

  return (
    <>
      <div className="container" style={{ backgroundColor: myColor }}>
        <button className="button" onClick={handleClick}>
          Click For Random Background Color!
        </button>
      </div>
    </>
  );
};
export default App;
