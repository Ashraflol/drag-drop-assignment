import React from "react";
import DragItem from "./DragItem";
import { useDrop } from "react-dnd";
const mylist = [
  {
    id: 1,
    name: "Item 1",
  },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

export default function DragDropComponent() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: (item) => addItemToDropArea(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addItemToDropArea = (item) => {
    console.log(item);
    const itemlist = mylist.filter((i) => i.id == item.id);
    setDroppedItems((droppedItems) => [...droppedItems, ...itemlist]);
  };
  const [droppedItems, setDroppedItems] = React.useState([]);
  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "800px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div className="items-to-drag" style={{ margin: "20px" }}>
        <h2>Drag</h2>
        {mylist.map((item) => (
          <DragItem id={item.id} name={item.name} />
        ))}
      </div>
      <div className="drop-area" ref={drop} style={{ margin: "20px" }}>
        <h2>Drop</h2>
        <div
          className="drop-zone"
          style={{
            border: "2px dashed gray",
            minHeight: "200px",
            minWidth: "300px",
            textAlign: "center",
          }}
        >
          {droppedItems.map((item) => (
            <DragItem id={item.id} name={item.name} />
          ))}
          {droppedItems.length === 0 && "Drop items here"}
        </div>
      </div>
    </div>
  );
}
