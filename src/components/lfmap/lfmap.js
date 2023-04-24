import React from "react";
import "./lfmap.css";
import "./leaflet.css";

import { useSelector, useDispatch } from 'react-redux';

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import useCSS from "../../utils/useCSS";

function LFMap() {
  const selectAppState = state => state.appState;
  const appState = useSelector(selectAppState);

  useCSS("https://unpkg.com/leaflet@1.6.0/dist/leaflet.css");
  const position = [appState.sortedCities[0].latitude, appState.sortedCities[0].longitude];

    return (
      <MapContainer id="mapid" center={position} zoom="6">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {appState.sortedCities.slice(0,6).map((city) => {
          if (!city.error) {
            return (
              <Marker
                key={city.name + city.country}
                position={[city.latitude, city.longitude]}
              >
                <Popup>{city.name + ", " + city.country}</Popup>
              </Marker>
            );
          } else {
            return null;
          }
        })}
      </MapContainer>
    );
}

export default LFMap;
