import React from "react";

import "./signupbutton.css";

const SignupButton = () => {
  return (
    <a
      href={process.env.REACT_APP_AUTH_COGNITO_URL + 'signup?client_id=' + process.env.REACT_APP_AUTH_USER_POOL_CLIENT_ID + '&response_type=code&redirect_uri=' + process.env.REACT_APP_AUTH_COGNITO_REDIRECT_URI}
    >
      <button variant="contained" className="btn-signup">
        Sign Up
      </button>
    </a>
  );
};

export default SignupButton;
