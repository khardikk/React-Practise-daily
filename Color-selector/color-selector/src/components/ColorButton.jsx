// ColorButton.js
import React from 'react';

const ColorButton = ({ color, onClick, colorname}) => (
  <button
    onClick={onClick}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{ backgroundColor: color }}
  >
    {colorname}
  </button>
);

export default ColorButton;
