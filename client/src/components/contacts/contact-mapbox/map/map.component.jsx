import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useRef } from "react";
import {
  geoCoder, loadMap, map, unSubscribeMap
} from "../../../../utils/mapbox/mapbox.utils";
import MarkerContent from "../map-marker/map-marker.component";
import MapPopUp from "../map-popup/map-popup.component";
import { MapContainer } from "./map.styles";


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

  return <MapContainer ref={mapContainerRef} className="map-container" />;
};

export default MapContent;
