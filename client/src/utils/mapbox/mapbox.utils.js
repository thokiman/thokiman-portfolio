import * as mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import mapboxgl, { Marker, Popup } from "mapbox-gl/dist/mapbox-gl-csp";
import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

mapboxgl.workerClass = MapboxWorker;


export let mapBoxAccessToken;
if (process.env.NODE_ENV === "development") {
  mapBoxAccessToken =
    process.env.REACT_APP_MAPBOX_PUBLIC_TOKEN;

}

mapboxgl.accessToken = mapBoxAccessToken;

export const geoCoder = async (address) => {
  const geocodingConfig = mbxGeocoding({
    accessToken: mapBoxAccessToken,
  });
  const geoData = await geocodingConfig
    .forwardGeocode({ query: address, limit: 1 })
    .send();
  return geoData.body.features[0];
};

export const map = (container, mapBoxData, zoom) => {
  return new mapboxgl.Map({
    container: container,
    style: "mapbox://styles/mapbox/streets-v11",
    center: mapBoxData.geometry.coordinates,
    zoom: zoom,
  });
};

export const loadMap = (map, MarkerComponent, PopUpComponent, mapBoxData) => {
  map.on("load", () => {
    map.resize();
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    const markerNode = document.createElement("div");
    ReactDOM.render(<MarkerComponent />, markerNode);
    const marker = new Marker({ element: markerNode, anchor: "bottom" });
    marker.setLngLat(mapBoxData.geometry.coordinates).addTo(map);

    map.on("click", () => {
      const popupNode = document.createElement("div");
      ReactDOM.render(
        <PopUpComponent placeName={mapBoxData.place_name} />,
        popupNode
      );
      const popup = new Popup({ anchor: "top" });
      popup
        .setLngLat(mapBoxData.geometry.coordinates)
        .setDOMContent(popupNode)
        .addTo(map);
    });
  });
};

export const unSubscribeMap = (map) => {
  map.remove();
};
