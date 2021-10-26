import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarActive } from '../../../redux/header/header.selectors';
import {
  measureFooterGeneralIconStyles,
  measureProfileFooterIconStyles,
} from '../commons/footer.utils.style';
import {
  FooterContainerContact,
  FooterCreamPrickInklaim,
  FooterGeneralIcon,
  FooterWhiteOutlineThokiman,
  ProfileFooterContainerContact,
  ProfileFooterIconContact,
  ProfileFooterTextContact,
} from './footer-contact.styles';

export const FooterContact = ({ isSideBarActive }) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  return (
    <FooterContainerContact
      $issidebaractive={isSideBarActive}
      className='footer-contact'
    >
      <ProfileFooterContainerContact
        $measureprofilefootericon={measureProfileFooterIconStyles(
          viewWidth,
          viewHeight
        )}
      >
        <ProfileFooterIconContact>
          <FooterGeneralIcon
            $measurefootergeneralicon={measureFooterGeneralIconStyles(
              viewWidth,
              viewHeight
            )}
            className='footer-general-icon'
          >
            <FooterCreamPrickInklaim />
          </FooterGeneralIcon>
          <FooterGeneralIcon
            $measurefootergeneralicon={measureFooterGeneralIconStyles(
              viewWidth,
              viewHeight
            )}
            className='footer-general-icon'
          >
            <FooterWhiteOutlineThokiman />
          </FooterGeneralIcon>
        </ProfileFooterIconContact>
        <ProfileFooterTextContact className='footer-text'>
          Copyright<sup>&#9400;</sup>2021.
          <em>Allright reserved </em>
          {window.innerWidth <= 800 ? null : '|'}
          <br />
          Thomas Santosa, B.Eng.
        </ProfileFooterTextContact>
      </ProfileFooterContainerContact>
      <br />
    </FooterContainerContact>
  );
};
const mapStateToProps = createStructuredSelector({
  isSideBarActive: selectIsSideBarActive,
});

export default connect(mapStateToProps)(FooterContact);
