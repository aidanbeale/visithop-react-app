import React, { useState } from "react";

import { useSelector, useDispatch } from 'react-redux'

import "./searchbar.css";
import SearchButton from "./components/searchbutton/searchbutton";
import AutocompleteSearch from "./components/autocompletesearch/autocompletesearch";
import AutocompleteList from "./components/autocompletelist/autocompletelist";

function Searchbar() {
  const dispatch = useDispatch();
  const selectAppState = state => state.appState;
  const appState = useSelector(selectAppState);

  const [showCities, setShowCities] = useState([]);
  const [renderAutocompleteList, setrenderAutocompleteList] = useState(false);
  const [searchTerm, setSearchTerm] = useState({
    name: "",
    latitude: 0,
    longitude: 0,
  });

  function updateSearchTerm(newText) {
    const latitude = searchTerm.latitude;
    const longitude = searchTerm.longitude;
    setSearchTerm({ latitude, longitude, name: newText });
  }

  return (
    <div>
      <div className="input-main">
        <div className="input-div">
          <AutocompleteSearch
            citiesList={appState.citiesList}
            setShowCities={setShowCities}
            setrenderAutocompleteList={setrenderAutocompleteList}
            searchTerm={searchTerm}
            updateSearchTerm={updateSearchTerm}
          />
          <SearchButton searchTerm={searchTerm} />
        </div>
        <AutocompleteList
          showCities={showCities}
          renderAutocompleteList={renderAutocompleteList}
          setrenderAutocompleteList={setrenderAutocompleteList}
          setSearchTerm={setSearchTerm}
          updateSearchTerm={updateSearchTerm}
        />
      </div>
    </div>
  );
}

export default Searchbar;
