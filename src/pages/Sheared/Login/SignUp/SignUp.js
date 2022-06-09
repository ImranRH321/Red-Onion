import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-50 mx-auto border p-5">
      <h2 className="text-primary mb-3 fst-italic">SignUP page </h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="confirm-password" />
        </Form.Group>
        <Button className="w-50 mx-auto mb-3" variant="info" type="submit">
          SignUP
        </Button>
      </Form>
      <p>All ready account please ? <Link to='/login' className="text-decoration-none">Login</Link></p>

    </div>
  );
};

export default SignUp;
