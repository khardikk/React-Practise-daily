import { useState } from "react"
import ColorButton from "./components/ColorButton"

function App() {
  const [color, setColor] = useState("black")

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const colorButtons = [
    { color: "red", name: "Red" },
    { color: "green", name: "Green" },
    { color: "blue", name: "Blue" },
    { color: "pink", name: "Pink" },
    { color: "orange", name: "Orange" },
    { color: "yellow", name: "Yellow" },
    { color: "purple", name: "Purple" },
    { color: "grey", name: "Grey" },
    { color: "violet", name: "Violet" },

  ];

  return (
    <div className="w-full h-screen duration-500"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colorButtons.map((button) => (
            <ColorButton
              key={button.color}
              color={button.color}
              colorname={button.name}
              onClick={() => handleColorChange(button.color)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App