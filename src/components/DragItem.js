import { useDrag } from "react-dnd";

function DragItem({ id, name }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { id, name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return <div ref={drag}>{name}</div>;
}

export default DragItem;
