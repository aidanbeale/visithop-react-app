import React from "react";

import "./signupbutton.css";

const SignupButton = () => {
  return (
    <a
      href="https://visithop.auth.ap-southeast-2.amazoncognito.com/authorize?client_id=63vcmquos72i3tt3lc1k8tjkfr&response_type=code&redirect_uri=http://localhost:3000/"
      className="btn-signup"
    >
      <button variant="contained" className="btn-signup">
        Sign Up
      </button>
    </a>
  );
};

export default SignupButton;
