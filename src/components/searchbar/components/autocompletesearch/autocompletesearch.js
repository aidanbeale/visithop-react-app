import React, { useRef } from "react";

import "./autocompletesearch.css";
import { ManageInput } from "./input-hook";

import useOutsideAlerter from "../../../../utils/outsideAlerter";

function AutocompleteSearch({
  citiesList,
  setShowCities,
  setrenderAutocompleteList,
  searchTerm,
  updateSearchTerm,
}) {
  const textInput = useRef(null);
  const searchDiv = useRef(null);
  useOutsideAlerter(searchDiv, "search-city");

  const { bind } = ManageInput(
    citiesList,
    setShowCities,
    setrenderAutocompleteList,
    "",
    updateSearchTerm
  );

  function handleClick() {
    textInput.current.focus();
    searchDiv.current.className = "search-city search-city-clicked";
  }

  function handleMouseLeave() {
    if (searchDiv.current.className.includes("search-city-clicked")) {
      searchDiv.current.className = "search-city search-city-clicked";
    } else {
      searchDiv.current.className = "search-city";
    }
  }

  function handleMouseEnter() {
    if (!searchDiv.current.className.includes("search-city-clicked")) {
      searchDiv.current.className = "search-hover search-city";
    }
  }

  var inputProps = {};
  if (searchTerm.name !== "") {
    inputProps.value = searchTerm.name;
  }

  return (
    <div
      className="search-city"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={searchDiv}
    >
      <div className="autocomplete">
        <label className="input-label">Location</label>
        <input
          type="text"
          required
          className="search-input"
          placeholder="Find a city"
          {...bind}
          ref={textInput}
          {...inputProps}
        ></input>
      </div>
    </div>
  );
}

export default AutocompleteSearch;
