import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const useName = useRef('')
  const useEmail = useRef("");
  const usePassword = useRef("");
  const navigate = useNavigate();
  const [agree, setAgre] = useState(false)
  const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);

  let elementError;
  if (error) {
    elementError = <p className="text-danger">Eroor: {error?.message}</p>;
  }

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
   console.log('user', user);
  }
  const SubmitCreateUser = async event => {
    event.preventDefault();
    const name = useName.current.value;
    const email = useEmail.current.value;
    const password = usePassword.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName:name});
    alert('Updated profile');
    navigate("/home");
  };



  return (
    <div className="w-50 mx-auto border p-5">
      <div>
        <h2 className="text-primary mb-3 fst-italic">SignUP page </h2>
        <Form onSubmit={SubmitCreateUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control ref={useName} type="text" placeholder="Your Name" />
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

          {/* <label className={agree?' ps-2 text-primary':' ps-2 text-danger'} for="trams">new user checkbox </label> */}
           <input onClick={() => setAgre(!agree)}   type="checkbox" name="trams" id="" />
          <label className={`ps-2 ${!agree?'':'ps-2 text-danger'}`} for="trams">new user checkbox </label>
          <br />

          <Button disabled={!agree} className="w-50 mx-auto mb-3" variant="info" type="submit">
            SignUP
          </Button>
        </Form>
        <p>
          All ready account please ?
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











