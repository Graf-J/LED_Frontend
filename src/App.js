import React, { useState } from 'react';
import ColorSelector from './components/ColorSelector';
import Brightness from './components/Brightness';
import Random from './components/Random';
import Rainbow from './components/Rainbow';
import Wipe from './components/Wipe';
import './App.css';

function App() {
  const [activeColor, setActiveColor] = useState([])

  const handOverColor = (r, g, b) => setActiveColor([r, g, b]);

  return (
    <div className="app">
      <ColorSelector handOverColor={handOverColor} />
      <Brightness color={activeColor} />
      <Random color={activeColor} />
      <Rainbow />
      <Wipe color={activeColor} />
    </div>
  );
}

export default App;
