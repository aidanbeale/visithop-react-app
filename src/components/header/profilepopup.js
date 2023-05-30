import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import heartSVG from "../../images/heart.svg";
import logoutSVG from "../../images/logout.svg";
import backpackSVG from "../../images/backpack.svg";
import profileSVG from "../../images/profile.svg";

import "./profilepopup.css";

const ProfilePopup = ({ showProf, setShowProf, profileRef }) => {
  const popupRef = useRef();
  // const { user } = useAuth0();
  // const { name, picture } = user;
  const name = "Aidan Beale"

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

  useEffect(() => {
    const handleClick = (e) => {
      // debugger;
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
      <ul>
        <li className="popup-user-container">
          <div className="popup-picture-container">
            <img
              className="popup-picture"
              src={profileSVG}
              alt="User profile"
            ></img>
          </div>
          <div className="popup-user-details">
            <p>{name.slice(0, 14) + "..."}</p>
            <p className="popup-profile-link">View profile</p>
          </div>
        </li>
        <li className="line-block"></li>
        <li className="profile-item item-disabled">
          <img className="profile-svg" src={backpackSVG} alt="Trips" />
          My Trips
        </li>
        <li className="profile-item item-active" onClick={hidePopup}>
          <NavLink to="/saved-cities">
            <img className="profile-svg" src={heartSVG} alt="Heart" />
            Saved Cities
          </NavLink>
        </li>
        <li className="line-block"></li>
        <li
          className="profile-item logout-button"
          // onClick={() =>
            // logout({
            //   returnTo: window.location.origin,
            // })
          // }
        >
          <img className="profile-svg" src={logoutSVG} alt="Exit" />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default ProfilePopup;
