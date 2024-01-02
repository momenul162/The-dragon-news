import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bgImage from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <div className="p=4">
        <h3 className="mb-4 mx-2">Login With</h3>
        <Button className="mb-2 mx-2 px-5" variant="outline-primary">
          <FaGoogle />
          Login with Google
        </Button>
        <Button className="mb-2 mx-2 px-5" variant="outline-success">
          <FaGithub />
          Login with Github
        </Button>
      </div>
      <div>
        <h3 className="my-4">Find Us On</h3>
        <ListGroup as="ul">
          <ListGroup.Item as="li">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <FaInstagram></FaInstagram> Istagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <img src={bgImage} alt="" />
    </div>
  );
};

export default RightNav;
