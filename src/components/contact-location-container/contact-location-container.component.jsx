import React from "react";
import MapContent from "../map/map.component";

import {
  ContactLocationContainer,
  ContactLocationInfo,
  ContactLocationItem,
  ContactLocationTitle,
} from "./contact-location-container.styles";

const ContactLocation = ({
  info: {
    location: { address, zoom },
    email,
    phone,
  },
}) => {
  return (
    <ContactLocationContainer>
      <MapContent zoom={zoom} address={address} />
      <ContactLocationInfo>
        <ContactLocationTitle>Current Location</ContactLocationTitle>
        <ContactLocationItem>{address}</ContactLocationItem>
        <ContactLocationItem>{email}</ContactLocationItem>
        <ContactLocationItem>{phone}</ContactLocationItem>
      </ContactLocationInfo>
    </ContactLocationContainer>
  );
};

export default ContactLocation;
