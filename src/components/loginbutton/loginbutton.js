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
      href="https://visithop.auth.ap-southeast-2.amazoncognito.com/login?client_id=63vcmquos72i3tt3lc1k8tjkfr&response_type=code&redirect_uri=http://localhost:3000/"
    >
      <button variant="contained" className="btn-login" ref={loginRef}>
        Log In
      </button>
    </a>
  );
};

export default LoginButton;

