import React, { useEffect, useRef }  from "react";

import "./loginbutton.css";

const LoginButton = ({ isHome }) => {
  const loginRef = useRef();

  useEffect(() => {
    if (!isHome) {
      loginRef.current.className = "btn-login btn-login-light";
    } else {
      loginRef.current.className = "btn-login";
    }
  }, []);

  return (
    <a
    href={process.env.REACT_APP_AUTH_COGNITO_URL + 'login?client_id=' + process.env.REACT_APP_AUTH_USER_POOL_CLIENT_ID + '&response_type=code&redirect_uri=' + process.env.REACT_APP_AUTH_COGNITO_REDIRECT_URI}
    >
      <button variant="contained" className="btn-login" ref={loginRef}>
        Log In
      </button>
    </a>
  );
};

export default LoginButton;

