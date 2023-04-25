import React from "react";

import "./label.css";

function Label({ labelText }) {
  return (
    <div className="label-div">
      <label className="label-label">{labelText}</label>
    </div>
  );
}

export default Label;
