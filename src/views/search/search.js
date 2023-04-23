import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import findNearbyCities from '../../utils/findNearbyCities';
import CityList from '../../components/citylist/citylist';
// import LoadMoreCities from '../../components/loadmorecities/loadmorecities';

import "./search.css";

function Search() {
  const dispatch = useDispatch()
  const selectAppState = state => state.appState
  const appState = useSelector(selectAppState)

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

  if (appState.sortedCities) {
    return (
      <div id="main-content">
        <div className="message-text">
          <p>Discover nearby cities to {appState.chosenCity.name}</p>
        </div>
        <div className="listing-container">
          <div className="city-content-container">
            <CityList />
            {/* <LoadMoreCities
              displayCities={displayCities}
              setDisplayCities={setDisplayCities}
              sortedCities={sortedCities}
              setSortedCities={setSortedCities}
              setHasMerged={setHasMerged}
            /> */}
          </div>
          {/* <LFMap
            isMobile={isMobile}
            displayCities={displayCities}
            setShowMap={setShowMap}
          /> */}
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Search;
