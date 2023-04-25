import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import "./loadmorecities.css";

import LoadingSpinner from "../loadingspinner/loadingspinner";
import getCityData from "../../utils/fetchData/getCityData";

function LoadMoreCities() {
  const dispatch = useDispatch();
  const selectAppState = state => state.appState;
  const appState = useSelector(selectAppState);

  const [disableButton, setDisableButton] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Prevent user from loading too many pictures
    if (appState.fetchedCityData.length >= 12) return setDisableButton(true);
  }, [appState.fetchedCityData]);

  function buttonClicked() {
    if (disableButton) return;
    setLoading(true);
    // Return the next four cities to display
    const findCities = appState.sortedCities.slice(
      appState.fetchedCityData.length,
      appState.fetchedCityData.length + 4
    );
    getCityData(findCities).then((foundCities) => {
      setLoading(false);
      dispatch({ type: 'appState/setFetchedCityData', payload: appState.fetchedCityData.concat(foundCities) });
    });
  }
  if (loading) return <LoadingSpinner />;
  return (
    <div className="button-container">
      <div
        className={`button-inner ${disableButton ? "disableButton" : ""}`}
        onClick={buttonClicked}
      >
        Load More Cities
      </div>
    </div>
  );
}

export default LoadMoreCities;
