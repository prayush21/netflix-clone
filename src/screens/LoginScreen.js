import React, { useState } from "react";
import SignUp from "../SignUp";
import "./LoginScreen.css";
const Login = () => {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className="loginScreen">
      <img
        className="loginScreen__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="netflix-logo"
      ></img>
      {/* <select name="" id=""></select> */}
      <button className="loginScreen__button" onClick={() => setSignIn(true)}>Sign In</button>
      <div className="loginScreen__gradient"></div>
      <div className="loginScreen__body">
        {signIn ? <SignUp/> : <>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="loginScreen__input">
            <form action="">
              <input type="email" placeholder="Email Address" />
              <button type="submit" onClick={() => setSignIn(true)}>Get Started</button>
            </form>
          </div>
        </>}
        
      </div>
    </div>
  );
};

export default Login;
