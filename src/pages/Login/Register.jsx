import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const { createUser, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    setError(false);

    console.log({ name, email, password });
    try {
      const result = await createUser(email, password);
      console.log(result.user);
      navigate("/login");

      await profileUpdate(name);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const handleTerms = (e) => {
    setAccepted(e.target.checked);
  };

  return (
    <Container className="w-25 mt-4 border rounded p-3">
      <h1 className="text-center my-3">Please Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Enter name" required />
        </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="file" name="photo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleTerms}
            type="checkbox"
            name="check"
            label={
              <>
                Accespt <Link to="/terms">Terms & Conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Form.Text className="text-danger">{error}</Form.Text>
        <div className="d-flex flex-column">
          <Button
            type="submit"
            variant="outline-success"
            className="px-5 py-1 mt-3 fw-bold fs-4 login-button"
            disabled={!accepted}
          >
            Register
          </Button>
          <Form.Text className="text-center my-4">
            Already Have an Account? <Link to="/login">Login </Link>
          </Form.Text>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
