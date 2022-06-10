import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const useEmail = useRef("");
  const usePassword = useRef("");
  const navigate = useNavigate();

  let elementError;
  if (error) {
    elementError = <p className="text-danger">Eroor: {error?.message}</p>;
  }

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/home");
  }
  const SubmitCreateUser = event => {
    event.preventDefault();
    const email = useEmail.current.value;
    const password = usePassword.current.value;
    // console.log(email, password);
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="w-50 mx-auto border p-5">
      <div>
        <h2 className="text-primary mb-3 fst-italic">SignUP page </h2>
        <Form onSubmit={SubmitCreateUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={useEmail}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={usePassword}
              type="password"
              placeholder="password"
            />
          </Form.Group>
          {elementError}
          <Button className="w-50 mx-auto mb-3" variant="info" type="submit">
            SignUP
          </Button>
        </Form>
        <p>
          All ready account please ?{" "}
          <Link to="/login" className="text-decoration-none">
            Login
          </Link>
        </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
