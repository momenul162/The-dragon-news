import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Terms = () => {
  return (
    <Container className="mt-5">
      <h3 className="text-center my-3">Terms and Conditions</h3>
      <p>
        * Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deserunt dolor quas ea
        architecto corrupti nobis, nihil quo? Rem assumenda magni minima tempore labore. Ea modi
        error alias praesentium impedit.
      </p>
      <p>
        * Corporis deserunt dolor quas ea architecto corrupti nobis, nihil quo? Rem assumenda magni
        minima tempore labore. Ea modi error alias praesentium impedit.
      </p>
      <p>* Rem assumenda magni minima tempore labore. Ea modi error alias praesentium impedit.</p>
      <p>
        * Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deserunt dolor quas ea
        architecto corrupti nobis, nihil quo? Rem assumenda magni minima tempore labore. Ea modi
        error alias praesentium impedit.
      </p>
      <p>
        * Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deserunt dolor quas ea
        architecto corrupti nobis, nihil quo? Rem assumenda magni minima tempore labore. Ea modi
        error alias praesentium impedit.
      </p>
      <p>
        Go back <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
