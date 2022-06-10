import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {  useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const useEmail = useRef("");
  const usePassword = useRef("");
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending1, error1] = useSendPasswordResetEmail(
    auth
  );

  let elementError;
  if (error) {
    elementError = <p className="text-danger">Eroor: {error?.message}</p>;
  }

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    console.log('user',user);
    navigate("/home");
  }
  const existsUserLogin = event => {
    event.preventDefault();
    const email = useEmail.current.value;
    const password = usePassword.current.value;
    // console.log(email, password);
    signInWithEmailAndPassword(email,password)
  };

// reset 
  const handleForgetPassword = () => {
    const email = useEmail.current.value;
    sendPasswordResetEmail(email)
    console.log('reset send ');
    alert('send reset password')
  }


  return (
    <div className="w-50 mx-auto border p-5">
      <div>
        <h2 className="text-primary mb-3 fst-italic">Login page </h2>
        <Form onSubmit={existsUserLogin}>
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
              placeholder="Password"
            />
          </Form.Group>
          {elementError}
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
        <p>forget password <button onClick={handleForgetPassword} className='btn bg-dark text-white'>Reset</button> </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
