import React from "react";

import "./map-popup.styles.scss";
const MapPopUp = ({ placeName }) => {
  return (
    <div className="pop-up">
      <div className="pop-up-title">Hello, I'm Thokiman.</div>
      Now, I live in <br />
      {placeName}
    </div>
  );
};

export default MapPopUp;
