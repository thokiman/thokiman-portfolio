import * as mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
import mapboxgl, { Marker, Popup } from 'mapbox-gl/dist/mapbox-gl-csp';
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;

export const mapBoxAccessToken =
  'pk.eyJ1IjoidGhvbWFzOTRtYXAiLCJhIjoiY2toOXBrZ2xyMG0wYzJ5azg5ZXNyOHllcSJ9.rpgW1UPijqpcrVFBNsQ93Q';

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
  if (container === null) {
    // avoid nullable mapContainerRef, just return null;
    return;
  }

  return new mapboxgl.Map({
    container: container,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: mapBoxData.geometry.coordinates,
    zoom: zoom,
  });
};

export const loadMap = (map, MarkerComponent, PopUpComponent, mapBoxData) => {
  if (map === undefined) {
    // avoid nullable mapContainerRef, just return null;
    return;
  }

  map.on('load', () => {
    map.resize();
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    const markerNode = document.createElement('div');
    ReactDOM.render(<MarkerComponent />, markerNode);
    const marker = new Marker({ element: markerNode, anchor: 'bottom' });
    marker.setLngLat(mapBoxData.geometry.coordinates).addTo(map);

    map.on('click', () => {
      const popupNode = document.createElement('div');
      ReactDOM.render(
        <PopUpComponent placeName={mapBoxData.place_name} />,
        popupNode
      );
      const popup = new Popup({ anchor: 'top' });
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
