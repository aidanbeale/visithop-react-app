import React from "react";

import "./city.css";

function City({ city }) {
  return (
    <div className="city-item">
      <div className="flex-item-desktop">
        <div className="city-img-container">
          <img className="city-img" src={city.photo_1} alt="City"></img>
        </div>
        <div className="city">
          <div className="title-info">
            <p className="city-country">{city.country}</p>
            {city.distance ? (
              <p className="city-distance">{city.distance} Km</p>
            ) : null}
          </div>
          <div className="city-info">
            <p className="city-name">{city.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default City;
