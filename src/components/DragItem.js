import React from "react";
import { useDrag } from "react-dnd";

const DragItem = ({ id, name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { id, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const itemStyle = {
    border: "2px solid gray",
    opacity: isDragging ? 0.5 : 1,
    cursor: "move",
    padding: "8px",
    margin: "8px",
    textAlign: "center",
  };

  return (
    <div ref={drag} style={itemStyle}>
      {name}
    </div>
  );
};

export default DragItem;
