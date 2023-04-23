import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./searchbutton.css";

// https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
const serialize = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

function SearchButton({ searchTerm }) {
  const navigate = useNavigate();

  const [redirectPath, setRedirectPath] = useState(null);
  function buttonClicked() {
    // Ensure city has been selected
    if (
      searchTerm.name.includes(",") &&
      searchTerm.latitude !== 0 &&
      searchTerm.longitude !== 0
    ) {
      debugger;
      setRedirectPath("/search?" + serialize(searchTerm));
    }
  }
  if (redirectPath) {
    navigate(redirectPath);
    // return <Navigate to="redirectPath"
  } else {
    return (
      <div className="submit-button" onClick={buttonClicked}>
        <button type="submit" className="submit-button-inner">
          <span>
            <svg
              className="button-svg"
              aria-hidden="true"
              role="presentation"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
              </g>
            </svg>
          </span>
        </button>
      </div>
    );
  }
}

export default SearchButton;
