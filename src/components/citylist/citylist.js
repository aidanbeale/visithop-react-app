import React from "react";

import { useSelector } from 'react-redux';

import "./citylist.css";
import City from "./components/city/city";

function CityList() {
  const selectAppState = state => state.appState;
  const appState = useSelector(selectAppState);

  return (
    <div id="places">
      <div id="places-list">
        {appState.sortedCities.slice(0,6).map((city) => {
          if (!city.error) {
            return (
              <City
                key={city.name}
                city={city}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default CityList;
