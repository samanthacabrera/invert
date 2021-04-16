import React, { useState } from 'react';
import './App.css';

function App() {
  const white = "#ffffff"; 
  const black = "#000000";

  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");

  function invert() {
    if (color1 === white) {
      setColor1(black);
      setColor2(white);
    }
    else {
      setColor1(white);
      setColor2(black);
    }
  }

  return (
      <div style={{backgroundColor: color1, color: color2}}>
      <h1>Invert <br/> my <br/> colors</h1>
      <button style={{backgroundColor: color1, color: color2}} onClick={invert}>click me</button>
    </div> 
  )
}

export default App;
