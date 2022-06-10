import React from "react";
import { Button } from "react-bootstrap";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import Loading from "../Loading/Loading";

/* 6 hours time is 500 taka */
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  let elementError;
  if (error || error1) {
    elementError = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (user || user1) {
    console.log("user", user, user1);
    navigate("/home");
  }

  return (
    <div className="">
      <div className="d-flex justify-content-center align-items-center">
        <div className="bg-dark w-50" style={{ height: "2px" }}>
          &#8505;
        </div>
        <p>Or</p>
        <div className="bg-dark w-50" style={{ height: "2px" }}>
          &#8505;
        </div>
      </div>
      {elementError}
      <div>
        <Button
          onClick={() => signInWithGoogle()}
          className="d-block w-50 my-2 mx-auto"
          variant="success"
        >
          Google
        </Button>
        <Button
          onClick={() => signInWithGithub()}
          className="d-block w-50 my-2 mx-auto"
          variant="success"
        >
          Github
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
