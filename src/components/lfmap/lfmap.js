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
  const position = [appState.fetchedCityData[0].latitude, appState.fetchedCityData[0].longitude];

  let icon = L.icon({
    iconRetinaUrl:
      "https://visithop-cities.s3.ap-southeast-2.amazonaws.com/map-marker.png",
    iconUrl:
      "https://visithop-cities.s3.ap-southeast-2.amazonaws.com/map-marker.png",
    // shadowUrl: require("./images/layers.png"),
    iconSize: [41, 41], // size of the icon
    iconAnchor: [20, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [2, -41],
  });

    return (
      <MapContainer id="mapid" center={position} zoom="6">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {appState.fetchedCityData.map((city) => {
          if (!city.error) {
            return (
              <Marker
                key={city.name + city.country}
                position={[city.latitude, city.longitude]}
                icon={icon}
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
