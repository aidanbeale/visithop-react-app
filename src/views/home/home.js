import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './home.css';

import LoadCSV from '../../utils/loadCSV';

import Searchbar from '../../components/searchbar/searchbar';

function Home() {
  const dispatch = useDispatch()
  const selectAppState = state => state.appState
  const appState = useSelector(selectAppState)

  useEffect(() => {
    if (appState.citiesList && appState.citiesList.length === 0) {
      LoadCSV().then((cities) => {
        dispatch({ type: 'appState/setCitiesList', payload: cities });
      });
    }
  }, [appState.citiesList]);

  return (
    <div>
      <Searchbar />
    </div>
  )
}

export default Home;
