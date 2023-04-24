import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './home.css';

import LoadCSV from '../../utils/loadCSV';

import Header from '../../components/header/header';
import Searchbar from '../../components/searchbar/searchbar';
import Features from '../../components/features/features';

function Home() {
  const dispatch = useDispatch()
  const selectAppState = state => state.appState
  const appState = useSelector(selectAppState)

  const bannerImg = useRef(null);

  useEffect(() => {
    if (appState.citiesList && appState.citiesList.length === 0) {
      LoadCSV().then((cities) => {
        dispatch({ type: 'appState/setCitiesList', payload: cities });
      });
    }
  }, [appState.citiesList]);

  useEffect(() => {
    bannerImg.current.style["background-image"] = `url(${
      process.env.PUBLIC_URL + "/banner1.jpg"
    })`;
  });

  return (
    <div className="main-content">
      <Header />
      <div className="hero-banner" ref={bannerImg}>
        <Searchbar />
      </div>
      <Features />
    </div>
  )
}

export default Home;
