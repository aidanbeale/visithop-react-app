import React from "react";

import "./loginbutton.css";

const LoginButton = () => {
  return (
    <a
      href="https://visithop.auth.ap-southeast-2.amazoncognito.com/authorize?client_id=63vcmquos72i3tt3lc1k8tjkfr&response_type=code&redirect_uri=http://localhost:3000/"
    >
      <button variant="contained" className="btn-login">
        Log In
      </button>
    </a>
  );
};

export default LoginButton;

