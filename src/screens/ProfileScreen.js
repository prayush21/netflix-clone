import React from "react";
import Nav from "../Nav";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./../redux/userSlice";

import "./ProfileScreen.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
                <h3>Plans</h3>
              <button
                className="profileScreen__signOut"
                onClick={() => signOut(auth)}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
