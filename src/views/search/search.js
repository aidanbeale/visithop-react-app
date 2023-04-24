import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import findNearbyCities from '../../utils/findNearbyCities';
import CityList from '../../components/citylist/citylist';
import LFMap from "../../components/lfmap/lfmap";

import Header from '../../components/header/header';

import "./search.css";

function Search() {
  const dispatch = useDispatch();
  const selectAppState = state => state.appState;
  const appState = useSelector(selectAppState);

  // Get closest cities to chosen
  useEffect(() => {
    if (appState.citiesList && appState.chosenCity) {
      findNearbyCities(appState.citiesList, appState.chosenCity).then(
        (nearbyCities) => {
          dispatch({ type: 'appState/setSortedCities', payload: nearbyCities });
        }
      );
    }
  }, [appState.chosenCity, appState.citiesList]);

  if (appState.sortedCities.length) {
    return (
      <div id="main-content">
        <Header />
        <div className="message-text">
          <p>Discover nearby cities to {appState.chosenCity.name}</p>
        </div>
        <div className="listing-container">
          <div className="city-content-container">
            <CityList />
          </div>
          <LFMap />
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Search;
