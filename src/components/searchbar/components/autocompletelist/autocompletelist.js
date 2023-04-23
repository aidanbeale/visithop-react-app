import React, { useEffect, useRef } from "react";

import "./autocompletelist.css";
import AutocompleteItem from "../autocompleteitem/autocompleteitem";

function useOutsideAlerter(ref, setrenderAutocompleteList) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setrenderAutocompleteList(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setrenderAutocompleteList]);
}

function AutocompleteList({
  showCities,
  renderAutocompleteList,
  setrenderAutocompleteList,
  setSearchTerm,
  updateSearchTerm,
}) {
  const cityList = useRef(null);
  useOutsideAlerter(cityList, setrenderAutocompleteList);

  if (renderAutocompleteList) {
    return (
      <div className="autocomplete-list" ref={cityList}>
        {showCities.map((city) => (
          <AutocompleteItem
            setSearchTerm={setSearchTerm}
            setrenderAutocompleteList={setrenderAutocompleteList}
            key={city.name}
            city={city}
          />
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default AutocompleteList;
