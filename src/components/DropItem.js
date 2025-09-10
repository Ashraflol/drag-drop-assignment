import React from "react";

import { toast } from "react-toastify";

const DropItem = ({ name }) => {
  const commonStyle = {
    border: "2px solid gray",
    height: "100%",
    width: "100%",
  };
  const notify = (action) => {
    console.log("Clicked! " + action);
  };

  switch (name) {
    case "Input":
      return (
        <input
          style={commonStyle}
          type="text"
          placeholder="Input Field"
          onMouseDown={() => notify("Input Field")}
          data-grid={{ x: 0, y: 0, w: 2, h: 1 }}
        />
      );

    case "Button":
      return (
        <button
          onMouseDown={() => notify("Button")}
          style={commonStyle}
          data-grid={{ x: 0, y: 0, w: 2, h: 1 }}
        >
          Click Me
        </button>
      );

    case "Table":
      return (
        <table
          style={commonStyle}
          border="1"
          data-grid={{ x: 0, y: 0, w: 5, h: 5 }}
        >
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
            </tr>
          </tbody>
        </table>
      );

    default:
      return (
        <div data-grid={{ x: 0, y: 0, w: 2, h: 2 }}>
          <p>Unknown Item</p>
        </div>
      );
  }
};

export default DropItem;
