import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/editorsInsight1.png";
import second from "../../../assets/editorsInsight2.png";
import third from "../../../assets/editorsInsight3.png";
import { FaCalendarAlt } from "react-icons/fa";
import moment from "moment";

const EditorsInsight = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4 mt-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={first} />
          <Card.Body>
            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
          </Card.Body>
          <Card.Footer className="text-mute">
            <FaCalendarAlt className="text-secondary"></FaCalendarAlt>{" "}
            {moment().format("MMM Do YYYY")}
          </Card.Footer>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={second} />
          <Card.Body>
            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
          </Card.Body>
          <Card.Footer className="text-mute">
            <FaCalendarAlt className="text-secondary"></FaCalendarAlt>{" "}
            {moment().format("MMM Do YYYY")}
          </Card.Footer>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={third} />
          <Card.Body>
            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
          </Card.Body>
          <Card.Footer className="text-mute">
            <FaCalendarAlt className="text-secondary"></FaCalendarAlt>{" "}
            {moment().format("MMM Do YYYY")}
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default EditorsInsight;
