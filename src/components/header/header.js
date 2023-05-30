import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom";

import "./header.css";

import SignupButton from "../signupbutton/signupbutton";
import LoginButton from "../loginbutton/loginbutton";
import ProfilePopup from "./profilepopup";

import profileSVG from "../../images/profile.svg";
import lightProfileSVG from "../../images/profile-light.svg";

const MainNav = ({ isHome }) => {
  const headerRef = useRef();

  // Changes header title depending on page
  useEffect(() => {
    if (isHome) {
      headerRef.current.className = "header-title homepage";
    } else {
      headerRef.current.className = "header-title";
    }
  }, [isHome]);

  return (
    <NavLink to="/" className="header-title" ref={headerRef}>
      VisitHop
    </NavLink>
  );
};

const UserNav = ({ isHome }) => {
  const [showProf, setShowProf] = useState(false);
  const profileRef = useRef();
  let profileClickerColour = "black";

  return (
    <div className="profile">
      <div
        className="profile-img-container"
        ref={profileRef}
        onClick={() => {
          setShowProf(!showProf);
        }}
      >
        {isHome ? (
          <img src={lightProfileSVG} alt="Profile" className="profile-img" />
        ) : (
          <img src={profileSVG} alt="Profile" className="profile-img" />
        )}
        <div className="profile-clicker">
          <svg width="16" height="16" viewBox="0 0 20 20" fill={isHome ? "white" : "black"}>
            <path d="M16.66 7.903l-6.07 6.617c-.019.028-.012.064-.037.089a.522.522 0 0 1-.398.15.523.523 0 0 1-.394-.15c-.024-.025-.018-.06-.036-.087l-6.07-6.618a.53.53 0 0 1 .748-.748l5.753 6.274 5.755-6.275a.528.528 0 1 1 .748.748z"></path>
          </svg>
        </div>
      </div>

      <ProfilePopup
        showProf={showProf}
        setShowProf={setShowProf}
        profileRef={profileRef}
      />
    </div>
  );
};

const AuthNav = ({ isHome, userAuthCode }) => {
  return (
    <div className="user-options">
      {userAuthCode ? (
        <UserNav isHome={isHome}/>
      ) : (
        <div>
          <LoginButton isHome={isHome} />
          <SignupButton />
        </div>
      )}
    </div>  
  )
}

function Header() {
  const [isHome, setIsHome] = useState(window.location.pathname === "/");

  const selectAppState = state => state.appState
  const appState = useSelector(selectAppState)

  useEffect(() => {
    const homePath = window.location.pathname === "/";
    if (homePath && !isHome) {
      setIsHome(true);
    } else if (!homePath && isHome) {
      setIsHome(false);
    }
  }, [isHome]);

  return (
    <header className={isHome ? "homepage" : null}>
      <MainNav isHome={isHome} />
      <AuthNav isHome={isHome} userAuthCode={appState.userAuthCode} />
    </header>
  );
}

export default Header;
