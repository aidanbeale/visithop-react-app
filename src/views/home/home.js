import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from "react-router-dom";

import './home.css';

import LoadCSV from '../../utils/loadCSV';
import getUserToken from '../../utils/oauth/getUserToken';
import getUserInfo from '../../utils/oauth/getUserInfo';

import Header from '../../components/header/header';
import Searchbar from '../../components/searchbar/searchbar';
import Features from '../../components/features/features';
import Label from '../../components/label/label';

function Home() {
  const location = useLocation();
  const dispatch = useDispatch()
  const selectAppState = state => state.appState
  const appState = useSelector(selectAppState)

  const [authLoading, setAuthLoading] = useState(false);

  const bannerImg = useRef(null);

  useEffect(() => {
    if (!appState.userAuthCode) {
      const authCode = new URLSearchParams(location.search).get('code');
      if (authCode) {
        dispatch({ type: 'appState/setUserAuthCode', payload: authCode });
      }
    }
  });

  // Fetch user token to retrieve user info
  useEffect(() => {
    if (!authLoading && appState.userAuthCode && !appState.userToken && !appState.userInfo) {
      setAuthLoading(true);
      getUserToken(appState.userAuthCode).then((token) => {
        dispatch({ type: 'appState/setUserToken', payload: token });
        setAuthLoading(false);
      })
    }
  });

  // Fetch user info once token received
  useEffect(() => {
    if (!authLoading && !appState.userInfo && appState.userToken) {
      setAuthLoading(true);
      debugger;
      getUserInfo(appState.userToken.access_token).then((info) => {
        dispatch({ type: 'appState/setUserInfo', payload: info });
        setAuthLoading(false);
      })
    }
  });
 
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
        <Label labelText="AVAILABLE FOR CITIES IN EUROPE" />
      </div>
      <Features />
    </div>
  )
}

export default Home;
