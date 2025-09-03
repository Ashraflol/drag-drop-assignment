import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Drag and Drop Assignment</h1>
      </header>
      <Container>
        <Row>
          <Col>
            <div
              style={{
                border: "2px dashed #ccc",
                borderRadius: "5px",
                padding: "20px",
                textAlign: "center",
                minHeight: "200px",
              }}
            >
              <h2>Drag items here</h2>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <Button variant="primary" className="m-2">
              Item 1
            </Button>
            <Button variant="secondary" className="m-2">
              Item 2
            </Button>
            <Button variant="success" className="m-2">
              Item 3
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
