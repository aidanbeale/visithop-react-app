import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

import "./loadingspinner.css";

const spinnerCSS = {
  'display': 'block',
  'margin': '0 auto',
};

function LoadingSpinner({ loading, moreCities }) {
  return (
    <div className={moreCities ? "loading-spinner-more" : "loading-spinner"}>
      <BounceLoader
        cssOverride={spinnerCSS}
        size={50}
        color={"#e61e4d"}
        loading={loading}
      />
    </div>
  );
}

export default LoadingSpinner;
