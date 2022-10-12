import React from "react";
import { Button } from "react-bootstrap";
import googleicon from "../../icon/google.svg";
import facebook from "../../icon/facebook-f.svg";
import githubicon from "../../icon/github.svg";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialMedia = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (error) {
    errorElement = <p className="text-danger text-center">Error: {error?.message} </p>;
  }
  if(user){
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-success w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-success w-50"></div>
      </div>
      {errorElement}
      <div className="d-flex justify-content-center py-4">
        <div>
          <Button
            onClick={() => signInWithGoogle()}
            className="me-2 d-block mx-auto"
            variant="outline-success"
          >
            <img style={{ width: "30px" }} src={googleicon} alt="" /> Continue
            With Google
          </Button>
        </div>
        <div>
          <Button className="me-2 d-block mx-auto" variant="outline-success">
            <img style={{ width: "20px" }} src={facebook} alt="" /> Continue
            With Facebook
          </Button>
        </div>
        <div>
          <Button className="me-2 d-block mx-auto" variant="outline-success">
            <img style={{ width: "30px" }} src={githubicon} alt="" /> Continue
            With GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
