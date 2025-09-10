import React, { useState } from "react";
import { useDrop } from "react-dnd";
import GridLayout from "react-grid-layout";

import DragItem from "./DragItem";
import DropItem from "./DropItem";

const itemsList = [
  { id: 1, name: "Input" },
  { id: 2, name: "Button" },
  { id: 3, name: "Table" },
];

const DragDropComponent = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const addItemToDropArea = (item) => {
    console.log("Dropped:", item);
    const matchedItem = itemsList.find((i) => i.id === item.id);
    if (matchedItem) {
      setDroppedItems((prev) => [...prev, matchedItem]);
    }
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: (item) => addItemToDropArea(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "1000px",
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      {/* Left Panel - Draggable Items */}
      <div className="items-to-drag" style={{ margin: "20px" }}>
        <h2>Drag</h2>
        {itemsList.map((item) => (
          <DragItem key={item.id} id={item.id} name={item.name} />
        ))}
      </div>

      {/* Right Panel - Drop Zone */}
      <div className="drop-area" ref={drop} style={{ margin: "20px" }}>
        <h2>Drop</h2>
        <div
          className="drop-zone"
          style={{
            border: isOver ? "2px solid green" : "2px dashed gray",
            minHeight: "300px",
            minWidth: "600px",
            textAlign: "center",
            // inset boxshadow
            boxShadow: isOver
              ? "inset 0 0 10px rgba(102, 102, 102, 0.5)"
              : "inset 0 0 10px rgba(133, 133, 133, 0.7)",
            backgroundColor: isOver ? "#f0fff0" : "transparent",
          }}
        >
          <GridLayout className="layout" cols={12} rowHeight={30} width={600}>
            {droppedItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                data-grid={{ x: (index * 2) % 12, y: 0, w: 2, h: 2 }}
              >
                <DropItem id={index} name={item.name} />
              </div>
            ))}
          </GridLayout>
          {droppedItems.length === 0 && <p>Drop items here</p>}
        </div>
      </div>
    </div>
  );
};

export default DragDropComponent;
