import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsSideBarHidden } from "../../../../redux/header/header.selectors";
import MapContent from "../../contact-mapbox/map/map.component";
import {
  ContactLocationContainer,
  ContactLocationInfo,
  ContactLocationItem,
  ContactLocationTitle
} from "./contact-location-container.styles";


export const ContactLocation = ({
  isSideBarHidden,
  info: {
    location: { address, zoom },
    email,
    phone,
  },
}) => {
  return (
    <ContactLocationContainer $issidebarhidden={isSideBarHidden}>
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

const mapStateToProps = createStructuredSelector({
  isSideBarHidden: selectIsSideBarHidden,
});

export default connect(mapStateToProps)(ContactLocation);