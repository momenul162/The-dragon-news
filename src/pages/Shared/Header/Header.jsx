import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>

      <div className="d-flex">
        <Button variant="danger">Letest</Button>
        <Marquee speed={100}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur deserunt... explicabo
          quae. Placeat cumque consequuntur earum explicabo ipsam beatae cum eos.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
