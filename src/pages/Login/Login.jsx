import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useCol } from "react-bootstrap/esm/Col";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/category/0";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });
    setError(true);

    signIn(email, password)
      .then((result) => {
        const newUser = result.user;
        alert("Successfully logged in");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <Container className="w-25 mt-4 border rounded p-3">
      <h1 className="text-center my-3">Please Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-danger">{error}</Form.Text>
        <div className="d-flex flex-column">
          <Button
            type="submit"
            variant="outline-success"
            className="px-5 py-1 mt-3 fw-bold fs-4 login-button"
          >
            Login
          </Button>
          <Form.Text className="text-center my-4">
            Don't Have an Account? <Link to="/register">Register</Link>
          </Form.Text>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
