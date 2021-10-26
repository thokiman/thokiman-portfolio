import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { toggleDropdownHidden } from '../../../../redux/about/about.actions';
import {
  selectAboutRoute,
  selectIsDropdownHidden,
  selectTimelineCareerRoute,
} from '../../../../redux/about/about.selectors';
import AboutDropdownOptions from '../about-dropdown-options/about-dropdown-options.component';
import {
  AboutBarOne,
  AboutBarThree,
  AboutBarTwo,
  AboutBreakLine,
  AboutDropdownContainer,
  AboutDropdownContent,
  AboutDropdownLinkContainer,
  AboutDropdownMenuIcon,
  AboutThokimanHeadColorContainer,
  AboutThokimanHeadColorHide,
  AboutThokimanHeadColorShow,
} from './about-dropdown-bar.styles';
import {
  measureAboutThokimanHeadColorShowProps,
  measureAboutThokimanHeadHideProps,
} from './about-dropdown-bar.utils.style';

export const AboutDropdownBar = ({
  isDropdownHidden,
  toggleDropdownHidden,
  aboutRoute,
  careerTimelineRoute,
  location: { pathname },
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  return (
    <AboutDropdownContainer>
      <AboutThokimanHeadColorContainer className='about-thokiman-head-color-container-upper'>
        {isDropdownHidden ? null : (
          <AboutThokimanHeadColorShow
            $measureaboutthokimanheadcolorshow={measureAboutThokimanHeadColorShowProps(
              viewWidth,
              viewHeight
            )}
          />
        )}
      </AboutThokimanHeadColorContainer>
      <AboutDropdownContent className='about-dropdown-content'>
        <AboutDropdownLinkContainer
          to={aboutRoute}
          $matchpath={
            !!pathname.match(
              RegExp(
                `(${aboutRoute}/(skill|education|project|summary))|${aboutRoute}$`
              )
            )
          }
          disabled={
            !!pathname.match(
              RegExp(
                `(${aboutRoute}/(skill|education|project|summary))|${aboutRoute}$`
              )
            )
          }
          onClick={() => toggleDropdownHidden()}
        >
          About
        </AboutDropdownLinkContainer>
        <AboutDropdownMenuIcon onClick={() => toggleDropdownHidden()}>
          <AboutBarOne $isdropdownhidden={isDropdownHidden} />
          <AboutBarTwo $isdropdownhidden={isDropdownHidden} />
          <AboutBarThree $isdropdownhidden={isDropdownHidden} />
        </AboutDropdownMenuIcon>
      </AboutDropdownContent>

      {isDropdownHidden ? null : <AboutDropdownOptions />}
      <AboutBreakLine />
      <AboutDropdownContent className='about-dropdown-content'>
        <AboutDropdownLinkContainer
          to={`${aboutRoute}${careerTimelineRoute}`}
          $matchpath={
            !!pathname.match(RegExp(`${aboutRoute}${careerTimelineRoute}$`))
          }
        >
          Career Timeline
        </AboutDropdownLinkContainer>
      </AboutDropdownContent>
      <AboutThokimanHeadColorContainer className='about-thokiman-head-color-container-below'>
        {isDropdownHidden ? (
          <AboutThokimanHeadColorHide
            $measureaboutthokimanheadcolorhide={measureAboutThokimanHeadHideProps(
              viewWidth,
              viewHeight
            )}
          />
        ) : (
          ''
        )}
      </AboutThokimanHeadColorContainer>
    </AboutDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isDropdownHidden: selectIsDropdownHidden,
  aboutRoute: selectAboutRoute,
  careerTimelineRoute: selectTimelineCareerRoute,
});
const mapDispatchToProps = (dispatch) => ({
  toggleDropdownHidden: () => dispatch(toggleDropdownHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AboutDropdownBar)
);
