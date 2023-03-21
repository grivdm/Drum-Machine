import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DrumMachine from "./components/DrumMachine";

// The main page for the drum machine
const MainPage = () => {
  return (
    <Container
      className="d-flex
    position-relative
      flex-column
      justify-content-center
      align-items-center
    "
    >
      <Row>
        <Col>
          <h1 className="text-center m-5"
            style={{
              color: "#333333",
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            Drum Machine
            <span role="img" aria-label="piano">
              🎹
            </span>
          </h1>
        </Col>
      </Row>
      <Row className="position-relative">
        <DrumMachine />
      </Row>
      <Row>
        <Col>
          <p
            className="text-center mt-3"
            style={{
              color: "#333333",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
