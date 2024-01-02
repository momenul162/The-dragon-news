import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";
import { FaCalendarAlt } from "react-icons/fa";
import moment from "moment";

const LeftCart = () => {
  return (
    <Row xs={1} className="g-4 mt-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={first} />
          <Card.Body>
            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
          </Card.Body>
          <Card.Footer className="text-mute">
            Sports
            <FaCalendarAlt className="text-secondary mx-2"></FaCalendarAlt>
            {moment().format("MMM Do YYYY")}
          </Card.Footer>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={second} />
          <Card.Body>
            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
          </Card.Body>
          <Card.Footer className="text-mute">
            Sports
            <FaCalendarAlt className="text-secondary mx-2"></FaCalendarAlt>
            {moment().format("MMM Do YYYY")}
          </Card.Footer>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={third} />
          <Card.Body>
            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
          </Card.Body>
          <Card.Footer className="text-mute">
            Sports
            <FaCalendarAlt className="text-secondary mx-2"></FaCalendarAlt>
            {moment().format("MMM Do YYYY")}
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default LeftCart;
