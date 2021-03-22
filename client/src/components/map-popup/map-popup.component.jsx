import React from "react";

import { MapPopupTitle } from "./map-popup.styles";

const MapPopUp = ({ placeName }) => {
  return (
    <div>
      <MapPopupTitle>Hello, I'm Thokiman.</MapPopupTitle>
      Now, I live in <br />
      {placeName}
    </div>
  );
};

export default MapPopUp;
