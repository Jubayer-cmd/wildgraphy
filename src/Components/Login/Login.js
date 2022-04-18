import React, { useRef } from "react";
import { Button, Spinner } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";

const Login = () => {
  let ErrorOccur;
  const emailRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, updating] = useSendPasswordResetEmail(auth);
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
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email sent!");
    } else {
      toast("please enter your Email address!");
    }
  };
  return (
    <div className="fan">
      <div className="register-form">
        <h2 className="text-center text-primary m-3">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            ref={emailRef}
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
          {loading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {updating && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">updating...</span>
            </Spinner>
          )}
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
        <p>
          Forget Password?{" "}
          <button
            className="btn btn-link text-primary pe-auto text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </button>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
