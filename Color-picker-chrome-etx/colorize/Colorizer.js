import React, { useState } from "react";

const Colorizer = () => {
  const [color, setColor] = useState("#6699ff");
  const [copySuccess, setCopySuccess] = useState(false);

  // Function to handle color input change
  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    setColor(selectedColor);
    setCopySuccess(false); // Reset the copy success message
  };

  const copyColorToClipboard = () => {
    navigator.clipboard.writeText(color).then(
      function () {
        // Success callback: Update state to show the success message.
        setCopySuccess(true);

        // Reset the success message after a delay (e.g., 2 seconds).
        setTimeout(() => {
          setCopySuccess(false);
        }, 2000);
      },
      function (err) {
        // Error callback (optional): Handle errors here.
        console.error("Error copying color to clipboard: ", err);
      }
    );
  };

  return (
    <div className="colorizer" style={{ backgroundColor: color }}>
      <div className="box" style={{ backgroundColor: color }}>
        <input type="color" value={color} onChange={handleColorChange} />
        <button onClick={copyColorToClipboard}>Copy Color</button>
        {copySuccess && <div className="copy-success">Color copied to clipboard!</div>}
      </div>
    </div>
  );
};

export default Colorizer;
