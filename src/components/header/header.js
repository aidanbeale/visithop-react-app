import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom";

import "./header.css";

import SignupButton from "../signupbutton/signupbutton";
import LoginButton from "../loginbutton/loginbutton";

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

const AuthNav = ({ isHome, userAuthCode }) => {
  return (
    <div className="user-options">
      {userAuthCode ? (
        <div>User</div>
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
