import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDropComponent from "./components/DragDropComponent.js";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header className="App-header">
          <h1>Drag and Drop Assignment</h1>
        </header>
        <DragDropComponent />
      </div>
    </DndProvider>
  );
}

export default App;
