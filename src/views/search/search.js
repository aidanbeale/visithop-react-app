import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import findNearbyCities from '../../utils/findNearbyCities';

function Search() {
  const dispatch = useDispatch()
  const selectAppState = state => state.appState
  const appState = useSelector(selectAppState)

  const [sortedCities, setSortedCities] = useState([])

  // Get closest cities to chosen
  useEffect(() => {
    if (appState.citiesList && appState.chosenCity) {
      findNearbyCities(appState.citiesList, appState.chosenCity).then(
        (nearbyCities) => {
          setSortedCities(nearbyCities);
        }
      );
    }
  }, [appState.chosenCity, appState.citiesList]);

  return (
    <div>
      <h1>SEARCH PAGE</h1>
    </div>
  )
}

export default Search;
