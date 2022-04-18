import React from "react";
import { Button } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  let ErrorOccur;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const navigateSignUp = () => {
    navigate("/signup");
  };
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    ErrorOccur = <p className="text-danger">Error: {error?.message}</p>;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div className="register-form">
        <h2 style={{ textAlign: "center" }}>Login Here</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />

          <input
            className="w-50  btn btn-primary mt-2"
            type="submit"
            value="Login"
          />
          {ErrorOccur}
          <h5 className="my-2 mx-5">OR</h5>
          <Button
            className="btn btn-success py-2 my-3"
            onClick={() => {
              signInWithGoogle();
            }}
          >
            <i className="fa-brands fa-google"></i> Google SignIn
          </Button>
        </form>
        <p>
          New User?{" "}
          <Link
            to="/signup"
            className="text-primary pe-auto text-decoration-none"
            onClick={navigateSignUp}
          >
            Please Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
