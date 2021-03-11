import React from "react";
import MapContent from "../map/map.component";

import "./contact-location-container.styles.scss";

const ContactLocation = ({
  info: {
    location: { address, zoom },
    email,
    phone,
  },
}) => {
  return (
    <div className="contact-location-container">
      <MapContent zoom={zoom} address={address} />
      <div className="contact-location-info">
        <div className="contact-location-title">Current Location</div>
        <div className="contact-location-item">{address}</div>
        <div className="contact-location-item">{email}</div>
        <div className="contact-location-item">{phone}</div>
      </div>
    </div>
  );
};

export default ContactLocation;
