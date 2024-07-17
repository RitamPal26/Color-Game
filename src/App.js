import React, { useState } from 'react';
import './App.css';

const Matrix = () => {
  const [colors, setColors] = useState(Array(9).fill('white'));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (colors[index] === 'green') return;

    const newColors = [...colors];
    newColors[index] = 'green';

    setColors(newColors);
    setClickOrder([...clickOrder, index]);

    if (clickOrder.length === 8) {
      setTimeout(() => {
        const orangeColors = Array(9).fill('white');
        clickOrder.concat(index).forEach((i, idx) => {
          setTimeout(() => {
            orangeColors[i] = 'orange';
            setColors([...orangeColors]);
          }, idx * 300);
        });
      }, 300);
    }
  };

  return (
    <div className="matrix-container">
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className="matrix-box"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>Color Game</h1>
      <Matrix />
    </div>
  );
};

export default App;
