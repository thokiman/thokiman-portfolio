import React, { useRef, useEffect } from "react";

import {
  geoCoder,
  map,
  loadMap,
  unSubscribeMap,
} from "../../utils/mapbox/mapbox.utils";
import MarkerContent from "../map-marker/map-marker.component";
import MapPopUp from "../map-popup/map-popup.component";
import "./map.styles.scss";

const MapContent = ({ address, zoom }) => {
  const mapContainerRef = useRef();
  useEffect(() => {
    fetchMap();
  }, []);

  const fetchMap = async () => {
    const mapBoxData = await geoCoder(address);
    const mapBox = map(mapContainerRef.current, mapBoxData, zoom);
    loadMap(mapBox, MarkerContent, MapPopUp, mapBoxData);
    return unSubscribeMap;
  };

  return <div ref={mapContainerRef} className="map-container" />;
};

export default MapContent;
