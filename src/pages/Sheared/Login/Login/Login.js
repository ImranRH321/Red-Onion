import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div  className="w-50 mx-auto border p-5"> 
      <div>
        <h2 className="text-primary mb-3 fst-italic">Login page </h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="w-50 mx-auto mb-3" variant="info" type="submit">
            Login
          </Button>
        </Form>
        <p>
          New user Please SignUp ?
          <Link to="/signup" className="text-decoration-none">
            SignUp
          </Link>
        </p>
      </div>
       <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
