import React from "react";

import "./autocompleteitem.css";

function AutocompleteItem({ city, setSearchTerm, setrenderAutocompleteList }) {
  function handleClick() {
    setSearchTerm({
      name: city.name,
      country: city.country,
      latitude: city.latitude,
      longitude: city.longitude,
    });
    setrenderAutocompleteList(false);
  }
  return (
    <div className="autocomplete-item" onClick={handleClick}>
      <span className="location-icon">
        <svg
          fill="#6B6B6B"
          height="24"
          width="24"
          viewBox="0 0 128 128"
          className="bk-icon -iconset-geo_pin"
        >
          <path d="M98.5 42.5a34.5 34.5 0 1 0-64.3 17.2L64 120l29.8-60.3a34.2 34.2 0 0 0 4.7-17.2zM64 59.7a17.2 17.2 0 1 1 17-17 17.2 17.2 0 0 1-17 17z"></path>
        </svg>
      </span>
      <div className="autocomplete-info">
        <strong>{city.name}</strong>
        <br></br>
        <span className="autocomplete-item-subheading">{city.country}</span>
      </div>
    </div>
  );
}

export default AutocompleteItem;
