import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import heartSVG from "../../images/heart.svg";
import logoutSVG from "../../images/logout.svg";
import backpackSVG from "../../images/backpack.svg";
import profileSVG from "../../images/profile.svg";

import "./profilepopup.css";

const ProfilePopup = ({ showProf, setShowProf, profileRef }) => {
  const selectAppState = state => state.appState;
  const dispatch = useDispatch()
  const appState = useSelector(selectAppState);

  const popupRef = useRef();
  const name = appState.userInfo && appState.userInfo.username || "Unknown User";

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowProf(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  const hidePopup = () => {
    setShowProf(false);
  };

  const handleLogout = () => {
    dispatch({ type: 'appState/logoutUser' });
    window.location.replace(process.env.REACT_APP_AUTH_COGNITO_URL + 'logout?client_id=' + process.env.REACT_APP_AUTH_USER_POOL_CLIENT_ID + '&response_type=code&logout_uri=' + process.env.REACT_APP_AUTH_COGNITO_LOGOUT_URI);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (showProf) return;
      if (
        (popupRef.current && popupRef.current.contains(e.target)) ||
        profileRef.current.contains(e.target)
      ) {
        return;
      } else {
        setShowProf(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  if (!showProf) return null;
  return (
    <div ref={popupRef} className="profile-popup-container">
      <div className="popup-user-container">
        <div className="popup-picture-container">
          <img
            className="popup-picture"
            src={profileSVG}
            alt="User profile"
          ></img>
        </div>
        <div className="popup-user-details">
          <p>{name.length > 14 ? name.slice(0, 14) + "..." : name}</p>
          <p className="popup-profile-link">View profile</p>
        </div>
      </div>
      <ul className="popup-list">
        <div className="line-block"></div>
        <li className="profile-item item-disabled">
          <img className="profile-svg" src={backpackSVG} alt="Trips" />
          My Trips
        </li>
        <li className="profile-item item-disabled">
            <img className="profile-svg" src={heartSVG} alt="Heart" />
            Saved Cities
        </li>
        <div className="line-block"></div>
        <li
          className="profile-item logout-button" onClick={handleLogout}
        >
          <img className="profile-svg" src={logoutSVG} alt="Exit" />
            Logout
        </li>
      </ul>
    </div>
  );
};

export default ProfilePopup;
