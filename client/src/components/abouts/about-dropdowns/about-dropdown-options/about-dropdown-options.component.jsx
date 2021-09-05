import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  selectEducationRoute,
  selectProjectRoute,
  selectSkillRoute,
  selectSummaryRoute
} from '../../../../redux/about/about.selectors';
import {
  AboutDropdownLinkOption,
  AboutDropdownOption,
  AboutDropdownOptionsContainer
} from './about-dropdown-options.styles';

export const AboutDropdownOptions = ({
  location: { pathname },
  skillRoute,
  summaryRoute,
  educationRoute,
  projectRoute,
}) => {
  return (
    <AboutDropdownOptionsContainer>
      <AboutDropdownOption>
        <AboutDropdownLinkOption
          to={skillRoute}
          $matchpath={!!pathname.match(RegExp(`${ skillRoute }$`))}
        >
          Skill
        </AboutDropdownLinkOption>
      </AboutDropdownOption>
      <AboutDropdownOption>
        <AboutDropdownLinkOption
          to={educationRoute}
          $matchpath={!!pathname.match(RegExp(`${ educationRoute }$`))}
        >
          Education
        </AboutDropdownLinkOption>
      </AboutDropdownOption>
      <AboutDropdownOption>
        <AboutDropdownLinkOption
          to={projectRoute}
          $matchpath={!!pathname.match(RegExp(`${ projectRoute }$`))}
        >
          Project
        </AboutDropdownLinkOption>
      </AboutDropdownOption>
      <AboutDropdownOption>
        <AboutDropdownLinkOption
          to={summaryRoute}
          $matchpath={!!pathname.match(RegExp(`${ summaryRoute }$`))}
        >
          Summary
        </AboutDropdownLinkOption>
      </AboutDropdownOption>
    </AboutDropdownOptionsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  skillRoute: selectSkillRoute,
  summaryRoute: selectSummaryRoute,
  educationRoute: selectEducationRoute,
  projectRoute: selectProjectRoute,
});
export default withRouter(connect(mapStateToProps)(AboutDropdownOptions));
