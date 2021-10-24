import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import useWindowDimensions from '../../../../components/hooks/window-dimensions/useWindowDimensions.component';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import MapContent from '../../contact-mapbox/map/map.component';
import {
  ContactLocationContainer,
  ContactLocationInfo,
  ContactLocationItem,
  ContactLocationTitle,
} from './contact-location-container.styles';

export const ContactLocation = ({
  isSideBarActive,
  info: {
    location: { address, zoom },
    email,
    phone,
  },
}) => {
  const { viewWidth } = useWindowDimensions();
  const maxWidthSmartphone = 800;
  return (
    <ContactLocationContainer
      className='contact-location-container'
      $issidebaractive={isSideBarActive}
    >
      {viewWidth <= maxWidthSmartphone ? (
        <>
          <ContactLocationInfo className='contact-location-info'>
            <ContactLocationTitle className='contact-location-info-element'>
              Current Location
            </ContactLocationTitle>
            <ContactLocationItem className='contact-location-info-element'>
              {address}
            </ContactLocationItem>
            <ContactLocationItem className='contact-location-info-element'>
              {email}
            </ContactLocationItem>
            <ContactLocationItem className='contact-location-info-element'>
              {phone}
            </ContactLocationItem>
          </ContactLocationInfo>
          <MapContent zoom={zoom} address={address} />
        </>
      ) : (
        <>
          <MapContent zoom={zoom} address={address} />
          <ContactLocationInfo className='contact-location-info'>
            <ContactLocationTitle className='contact-location-info-element'>
              Current Location
            </ContactLocationTitle>
            <ContactLocationItem className='contact-location-info-element'>
              {address}
            </ContactLocationItem>
            <ContactLocationItem className='contact-location-info-element'>
              {email}
            </ContactLocationItem>
            <ContactLocationItem className='contact-location-info-element'>
              {phone}
            </ContactLocationItem>
          </ContactLocationInfo>
        </>
      )}
    </ContactLocationContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarActive: selectIsSideBarActive,
});

export default connect(mapStateToProps)(ContactLocation);
