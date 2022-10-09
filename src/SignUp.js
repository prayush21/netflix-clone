import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { auth } from "./firebase";
import "./SignUp.css";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log("authUser", authUser);
        alert("Registered");
      })
      .catch((err) => alert(err.message));
  };

  const signInFunc = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailRef.current.value,
        passwordRef.current.value) .then((authUser) => {
            console.log("authUser", authUser);
            alert("signin");
          })
          .catch((err) => alert(err.message));

    
  };

  return (
    <div className="signUp">
      <h1>Sign In</h1>
      <input ref={emailRef} type="email" placeholder="Email" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <button type="submit" onClick={signInFunc}>
        Sign In
      </button>
      <h3>
        New to Netflix? <span onClick={register}>Sign Up Now!</span>
      </h3>
    </div>
  );
};

export default SignUp;
