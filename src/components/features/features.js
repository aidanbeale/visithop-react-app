import React from "react";

import "./features.css";

import find from "./find.png";
import favourite from "./favourite.png";
import destination from "./destination.png";
import trip from "./trip.png";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-intro">
        <h4 className="features-into-subtitle">Features</h4>
        <h2 className="features-intro-heading">Find your next city</h2>
        <p className="features-intro-body">
          VisitHop lets you easily find nearby cities to visit, without needing
          to read endless blog posts and travel itineraries.
        </p>
      </div>
      <div className="features-list">
        <div className="features-item">
          <img className="features-item-img" alt="Find icon" src={find}></img>
          <p className="features-item-body">Discover nearby cities to visit</p>
        </div>
        <div className="features-item">
          <img className="features-item-img" alt="Save icon" src={favourite}></img>
          <p className="features-item-body">Save cities to visit later</p>
        </div>
        <div
          className="features-item disabled"
          style={{ justifyContent: "initial" }}
        >
          <span className="features-coming-soon">Coming soon</span>
          <img className="features-item-img" alt="Plan trips icon" src={destination}></img>
          <p className="features-item-body" style={{ marginRight: "auto" }}>
            Plan your trips
          </p>
        </div>
        <div className="features-item disabled">
          <span className="features-coming-soon">Coming soon</span>
          <img className="features-item-img" alt="Share trips icon" src={trip}></img>
          <p className="features-item-body">Share trips with friends</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
